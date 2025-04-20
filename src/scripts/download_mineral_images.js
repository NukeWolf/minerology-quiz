import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import http from 'http';
import crypto from 'crypto';
import { promisify } from 'util';

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths to the files
const CSV_PATH = path.join(__dirname, '../data/img_url_list.csv');
const MINERALS_TS_PATH = path.join(__dirname, '../data/minerals.ts');
const IMAGE_DIR = path.join(__dirname, '../../public/images/minerals');

// Create the image directory if it doesn't exist
if (!fs.existsSync(IMAGE_DIR)) {
  fs.mkdirSync(IMAGE_DIR, { recursive: true });
  console.log(`Created directory: ${IMAGE_DIR}`);
}

// Read the CSV file
const csvContent = fs.readFileSync(CSV_PATH, 'utf8');
const lines = csvContent.split('\n');

// Read the minerals.ts file
let mineralsFileContent = fs.readFileSync(MINERALS_TS_PATH, 'utf8');

// Parse the minerals.ts file to get the mineral names
const mineralNameRegex = /id:\s*"(\w+)",\s*\n\s*name:\s*"([^"]+)"/g;
const minerals = {};

let match;
while ((match = mineralNameRegex.exec(mineralsFileContent)) !== null) {
  const id = match[1];
  const name = match[2].replace(/\s*\([^)]*\)\s*/g, ''); // Remove parenthetical descriptions
  minerals[name.toLowerCase()] = { id, name, newUrls: [] };
  
  // Also add variations for minerals with complex names
  const nameParts = name.split(/[-(]/);
  if (nameParts.length > 1) {
    minerals[nameParts[0].trim().toLowerCase()] = { id, name, newUrls: [] };
  }
}

console.log(`Found ${Object.keys(minerals).length} minerals in the database`);

// Download function
const downloadImage = async (url, mineralName) => {
  return new Promise((resolve, reject) => {
    try {
      // Create a hash of the URL to use as part of the filename
      const urlHash = crypto.createHash('md5').update(url).digest('hex').substring(0, 8);
      const filename = `${mineralName.toLowerCase().replace(/\s+/g, '_')}_${urlHash}.jpg`;
      const filePath = path.join(IMAGE_DIR, filename);
      
      // Check if file already exists (for resuming downloads)
      if (fs.existsSync(filePath)) {
        console.log(`File already exists: ${filename}`);
        return resolve(`/images/minerals/${filename}`);
      }
      
      // Determine if http or https
      const client = url.startsWith('https') ? https : http;
      
      const request = client.get(url, (response) => {
        // Handle redirects
        if (response.statusCode === 301 || response.statusCode === 302) {
          console.log(`Redirecting to ${response.headers.location}`);
          downloadImage(response.headers.location, mineralName)
            .then(resolve)
            .catch(reject);
          return;
        }
        
        // Check if the request was successful
        if (response.statusCode !== 200) {
          return reject(new Error(`Failed to download image: ${response.statusCode}`));
        }
        
        // Create write stream
        const fileStream = fs.createWriteStream(filePath);
        response.pipe(fileStream);
        
        fileStream.on('finish', () => {
          fileStream.close();
          resolve(`/images/minerals/${filename}`);
        });
        
        fileStream.on('error', (err) => {
          fs.unlink(filePath, () => {}); // Delete the file if there was an error
          reject(err);
        });
      });
      
      request.on('error', (err) => {
        reject(err);
      });
      
      // Set a timeout
      request.setTimeout(20000, () => {
        request.abort();
        reject(new Error(`Request timeout for ${url}`));
      });
    } catch (error) {
      reject(error);
    }
  });
};

// Process each line of the CSV and download images
const processCSV = async () => {
  let newUrlsAdded = 0;
  
  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];
    if (!line.trim()) continue;
    
    // Split the line by comma and trim each part
    const parts = line.split(',').map(part => part.trim());
    
    // Get the URL (first part)
    const url = parts[0];
    
    // Get the mineral names (remaining parts except the last empty one)
    const mineralNames = parts.slice(1).filter(name => name);
    
    // If there's exactly one mineral name, process it
    if (mineralNames.length === 1) {
      const mineralName = mineralNames[0];
      
      // Try to match the mineral name to our database
      const mineralKey = mineralName.toLowerCase();
      
      let found = false;
      for (const [key, value] of Object.entries(minerals)) {
        // Check for full match or if the CSV name contains our mineral name
        if (key === mineralKey || 
            mineralKey.includes(key) || 
            key.includes(mineralKey)) {
          
          // Only add URL if the mineral has less than 50 URLs
          if (value.newUrls.length < 100) {
            try {
              console.log(`Line ${index+1}: Downloading image for ${value.name} (${value.newUrls.length+1}/100): ${url}`);
              const localUrl = await downloadImage(url, value.name);
              minerals[key].newUrls.push(localUrl);
              found = true;
              newUrlsAdded++;
              console.log(`Successfully downloaded: ${localUrl}`);
            } catch (error) {
              console.error(`Error downloading ${url}: ${error.message}`);
            }
          } else {
            console.log(`Line ${index+1}: Skipping ${url} for ${value.name} (already at 100 images limit)`);
          }
          break;
        }
      }
      
      if (!found) {
        console.log(`Line ${index+1}: Could not match mineral "${mineralName}" to database`);
      }
    }
  }
  
  // Update the minerals.ts file
  console.log(`\nAdding ${newUrlsAdded} local images to minerals.ts...`);
  
  for (const mineral of Object.values(minerals)) {
    if (mineral.newUrls.length > 0) {
      console.log(`Adding ${mineral.newUrls.length} images for ${mineral.name}`);
      
      // Find the imageUrls array for this mineral
      const imageUrlsRegex = new RegExp(`(id:\\s*"${mineral.id}",[\\s\\S]*?imageUrls:\\s*)\\[[^\\]]*?\\]`, 'g');
      
      // Replace the entire imageUrls array with the new URLs
      const newUrlsStr = mineral.newUrls.map(url => `"${url}"`).join(', ');
      
      // Update the content - completely replace existing URLs with new ones
      mineralsFileContent = mineralsFileContent.replace(
        imageUrlsRegex,
        `$1[${newUrlsStr}]`
      );
    }
  }
  
  // Write the updated minerals.ts file
  fs.writeFileSync(MINERALS_TS_PATH + '.new', mineralsFileContent);
  console.log(`\nUpdated minerals.ts.new file created. Please review before renaming.`);
};

// Run the script
processCSV().catch(error => {
  console.error('Script failed:', error);
}); 