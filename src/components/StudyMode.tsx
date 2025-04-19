import { useState } from 'react';
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

  // Navigate to next image
  const handleNextImage = () => {
    if (selectedMineral && selectedMineral.imageUrls.length > 1) {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % selectedMineral.imageUrls.length
      );
    }
  };

  // Navigate to previous image
  const handlePrevImage = () => {
    if (selectedMineral && selectedMineral.imageUrls.length > 1) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? selectedMineral.imageUrls.length - 1 : prevIndex - 1
      );
    }
  };

  // Handle mineral selection
  const handleSelectMineral = (mineral: Mineral) => {
    setSelectedMineral(mineral);
    setCurrentImageIndex(0); // Reset to first image when selecting a new mineral
  };

  // Get current image URL for selected mineral
  const getCurrentImageUrl = () => {
    if (!selectedMineral || !selectedMineral.imageUrls.length) return "";
    return selectedMineral.imageUrls[currentImageIndex];
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
              {selectedMineral.imageUrls.length > 1 && (
                <div className="image-nav">
                  <div className="image-nav-buttons">
                    <button className="image-nav-btn prev-btn" onClick={handlePrevImage}>
                      &larr; Previous
                    </button>
                    <span className="image-counter">
                      {currentImageIndex + 1}/{selectedMineral.imageUrls.length}
                    </span>
                    <button className="image-nav-btn next-btn" onClick={handleNextImage}>
                      Next &rarr;
                    </button>
                  </div>
                </div>
              )}
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
                    src={mineral.imageUrls[0]} 
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