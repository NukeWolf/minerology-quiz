import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths to the files
const CSV_PATH = path.join(__dirname, '../data/img_url_list.csv');
const MINERALS_TS_PATH = path.join(__dirname, '../data/minerals.ts');

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

// Count existing URLs for each mineral
for (const mineral of Object.values(minerals)) {
  const imageUrlsRegex = new RegExp(`id:\\s*"${mineral.id}",[\\s\\S]*?imageUrls:\\s*\\[([^\\]]*?)\\]`, 'g');
  let imageUrlsMatch = imageUrlsRegex.exec(mineralsFileContent);
  
  if (imageUrlsMatch) {
    const currentUrls = imageUrlsMatch[1].trim();
    mineral.existingUrlCount = currentUrls ? currentUrls.split(',').length : 0;
  } else {
    mineral.existingUrlCount = 0;
  }
}

// Process each line of the CSV
let newUrlsAdded = 0;
lines.forEach((line, index) => {
  if (!line.trim()) return;
  
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
        if (value.newUrls.length < 50) {
          minerals[key].newUrls.push(url);
          found = true;
          newUrlsAdded++;
          console.log(`Line ${index+1}: Adding ${url} to ${value.name} (${value.newUrls.length}/50)`);
        } else {
          console.log(`Line ${index+1}: Skipping ${url} for ${value.name} (already at 50 URLs limit)`);
        }
        break;
      }
    }
    
    if (!found) {
      console.log(`Line ${index+1}: Could not match mineral "${mineralName}" to database`);
    }
  }
});

// Update the minerals.ts file
console.log(`\nAdding ${newUrlsAdded} URLs to minerals.ts...`);

for (const mineral of Object.values(minerals)) {
  if (mineral.newUrls.length > 0) {
    console.log(`Adding ${mineral.newUrls.length} URLs to ${mineral.name}`);
    
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