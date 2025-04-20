import { useState, useMemo } from 'react';
import { minerals, Mineral } from '../data/minerals';
import MineralPlaceholder from './MineralPlaceholder';
import './StudyMode.css';

const StudyMode: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMineral, setSelectedMineral] = useState<Mineral | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle image loading error
  const handleImageError = (mineralId: string) => {
    setImageErrors(prev => ({ ...prev, [mineralId]: true }));
  };

  // Filter minerals based on search term
  const filteredMinerals = minerals.filter(mineral => 
    mineral.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (mineral.formula && mineral.formula.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (mineral.classification && mineral.classification.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Cache the preview image URLs for each mineral
  // This ensures the images don't change on each render
  const previewImageUrls = useMemo(() => {
    const urls: Record<string, string> = {};
    minerals.forEach(mineral => {
      if (mineral.imageUrls.length > 0) {
        const randomIndex = Math.floor(Math.random() * mineral.imageUrls.length);
        urls[mineral.id] = mineral.imageUrls[randomIndex];
      }
    });
    return urls;
  }, []); // Empty dependency array means this only runs once on mount

  // Navigate to next image
  const handleNextImage = () => {
    if (selectedMineral && selectedMineral.imageUrls.length > 1) {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % selectedMineral.imageUrls.length
      );
      console.log("Navigated to next image");
    }
  };

  // Navigate to previous image
  const handlePrevImage = () => {
    if (selectedMineral && selectedMineral.imageUrls.length > 1) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? selectedMineral.imageUrls.length - 1 : prevIndex - 1
      );
      console.log("Navigated to previous image");
    }
  };

  // Show a random image
  const handleRandomImage = () => {
    if (selectedMineral && selectedMineral.imageUrls.length > 1) {
      // Get a random index different from the current one
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * selectedMineral.imageUrls.length);
      } while (newIndex === currentImageIndex && selectedMineral.imageUrls.length > 1);
      
      setCurrentImageIndex(newIndex);
      console.log(`Showing random image ${newIndex + 1} of ${selectedMineral.imageUrls.length}`);
    }
  };

  // Handle mineral selection and set a random image
  const handleSelectMineral = (mineral: Mineral) => {
    setSelectedMineral(mineral);
    // Debug mineral info
    console.log(`Selected mineral: ${mineral.name}`);
    console.log(`Image URLs count: ${mineral.imageUrls.length}`);
    console.log(`Image URLs:`, mineral.imageUrls);
    
    // Select a random image index if there are multiple images
    if (mineral.imageUrls.length > 1) {
      // Using a more robust way to select a random index
      // Get current timestamp for even more randomness
      const timestamp = new Date().getTime();
      const randomIndex = Math.floor((Math.random() * timestamp) % mineral.imageUrls.length);
      console.log(`Selected random image ${randomIndex + 1} of ${mineral.imageUrls.length} for ${mineral.name}`);
      setCurrentImageIndex(randomIndex);
    } else {
      console.log(`Only one image available for ${mineral.name}, using index 0`);
      setCurrentImageIndex(0);
    }
  };

  // Get current image URL for selected mineral
  const getCurrentImageUrl = () => {
    if (!selectedMineral || !selectedMineral.imageUrls.length) return "";
    return selectedMineral.imageUrls[currentImageIndex];
  };

  // Get preview image for a mineral (stable between renders)
  const getPreviewImage = (mineral: Mineral) => {
    if (!mineral.imageUrls.length) return "";
    return previewImageUrls[mineral.id] || mineral.imageUrls[0]; // Fallback to first image if somehow not cached
  };

  return (
    <div className="study-container">
      <div className="study-header">
        <h2>Study Mode</h2>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search minerals, formulas, or classifications..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="disclaimer">
          <p>Disclaimer: Mineral descriptions and data are AI-generated for educational purposes. 
          The mineral images are real photographs sourced from public databases.</p>
        </div>
      </div>

      {selectedMineral ? (
        <div className="mineral-detail">
          <button className="back-btn" onClick={() => setSelectedMineral(null)}>
            &larr; Back to all minerals
          </button>
          
          <h3>{selectedMineral.name}</h3>
          
          <div className="detail-content">
            <div className="detail-image">
              {imageErrors[`${selectedMineral.id}-${currentImageIndex}`] ? (
                <MineralPlaceholder />
              ) : (
                <img 
                  src={getCurrentImageUrl()}
                  alt={selectedMineral.name} 
                  onError={() => handleImageError(`${selectedMineral.id}-${currentImageIndex}`)}
                />
              )}
              
              {/* Navigation controls - always visible */}
              <div className="image-nav">
                <div className="image-nav-buttons">
                  <button 
                    className="image-nav-btn prev-btn" 
                    onClick={handlePrevImage}
                    disabled={selectedMineral.imageUrls.length <= 1}
                  >
                    ← Previous
                  </button>
                  
                  <button 
                    className="image-nav-btn random-btn" 
                    onClick={handleRandomImage}
                    disabled={selectedMineral.imageUrls.length <= 1}
                  >
                    Random
                  </button>
                  
                  <span className="image-counter">
                    {currentImageIndex + 1}/{selectedMineral.imageUrls.length}
                  </span>
                  
                  <button 
                    className="image-nav-btn next-btn" 
                    onClick={handleNextImage}
                    disabled={selectedMineral.imageUrls.length <= 1}
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>
            
            <div className="detail-info">
              {selectedMineral.formula && (
                <div className="info-item">
                  <h4>Chemical Formula:</h4>
                  <p>{selectedMineral.formula}</p>
                </div>
              )}
              
              {selectedMineral.classification && (
                <div className="info-item">
                  <h4>Classification:</h4>
                  <p>{selectedMineral.classification}</p>
                </div>
              )}
              
              {selectedMineral.characteristics && (
                <div className="info-item">
                  <h4>Characteristics:</h4>
                  <p>{selectedMineral.characteristics}</p>
                </div>
              )}
              
              {selectedMineral.hints && selectedMineral.hints.length > 0 && (
                <div className="info-item">
                  <h4>Identifying Features:</h4>
                  <ul>
                    {selectedMineral.hints.map((hint, index) => (
                      <li key={index}>{hint}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="minerals-grid">
          {filteredMinerals.map(mineral => (
            <div 
              key={mineral.id} 
              className="mineral-card"
              onClick={() => handleSelectMineral(mineral)}
            >
              <div className="mineral-card-image">
                {imageErrors[mineral.id] ? (
                  <MineralPlaceholder />
                ) : (
                  <img 
                    src={getPreviewImage(mineral)} 
                    alt={mineral.name} 
                    onError={() => handleImageError(mineral.id)}
                  />
                )}
              </div>
              <h3>{mineral.name}</h3>
              {mineral.classification && <p className="mineral-classification">{mineral.classification}</p>}
              {mineral.formula && <p className="mineral-formula">{mineral.formula}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudyMode; 