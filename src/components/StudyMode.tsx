import { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { minerals, Mineral } from '../data/minerals';
import MineralPlaceholder from './MineralPlaceholder';
import './StudyMode.css';

const StudyMode: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMineral, setSelectedMineral] = useState<Mineral | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Track which images have been loaded to avoid reloading
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  // Store observed elements to disconnect them when component unmounts
  const observers = useRef<Record<string, IntersectionObserver>>({});
  
  // Clear all intersection observers when component unmounts
  useEffect(() => {
    return () => {
      Object.values(observers.current).forEach(observer => {
        observer.disconnect();
      });
    };
  }, []);

  // Handle image loading error
  const handleImageError = (mineralId: string) => {
    setImageErrors(prev => ({ ...prev, [mineralId]: true }));
  };

  // Handle successful image load
  const handleImageLoad = (imageId: string) => {
    setLoadedImages(prev => ({ ...prev, [imageId]: true }));
  };

  // Create a reusable intersection observer setup function
  const setupIntersectionObserver = useCallback((elementId: string) => {
    const observerOptions = {
      root: null, // Use the viewport as root
      rootMargin: '100px', // Load images 100px before they enter viewport
      threshold: 0.1 // Trigger when 10% visible
    };

    // Create a new observer for this element
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLImageElement;
          
          // Only set the src if the image hasn't already been loaded
          if (!loadedImages[elementId] && element.dataset.src) {
            element.src = element.dataset.src;
            
            // Disconnect observer once image is loading
            observer.disconnect();
            delete observers.current[elementId];
          }
        }
      });
    }, observerOptions);

    // Store observer reference for cleanup
    observers.current[elementId] = observer;
    
    return observer;
  }, [loadedImages]);

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

  // Show a random image
  const handleRandomImage = () => {
    if (selectedMineral && selectedMineral.imageUrls.length > 1) {
      // Get a random index different from the current one
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * selectedMineral.imageUrls.length);
      } while (newIndex === currentImageIndex && selectedMineral.imageUrls.length > 1);
      
      setCurrentImageIndex(newIndex);
    }
  };

  // Handle mineral selection and set a random image
  const handleSelectMineral = (mineral: Mineral) => {
    setSelectedMineral(mineral);
    
    // Select a random image index if there are multiple images
    if (mineral.imageUrls.length > 1) {
      const timestamp = new Date().getTime();
      const randomIndex = Math.floor((Math.random() * timestamp) % mineral.imageUrls.length);
      setCurrentImageIndex(randomIndex);
    } else {
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

  // Setup image observer for lazy loading
  const imageRef = useCallback((node: HTMLImageElement | null, imageId: string, imageUrl: string) => {
    if (node && !loadedImages[imageId]) {
      // Store the URL in data-src attribute instead of src
      node.dataset.src = imageUrl;
      
      // Use native lazy loading as a backup/enhancement
      node.loading = 'lazy';
      
      // If this image was already loaded before (from cache), set src directly
      if (loadedImages[imageId]) {
        node.src = imageUrl;
      } else {
        // Setup the observer to load when visible
        const observer = setupIntersectionObserver(imageId);
        observer.observe(node);
      }
    }
  }, [loadedImages, setupIntersectionObserver]);

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
                  onLoad={() => handleImageLoad(`${selectedMineral.id}-${currentImageIndex}`)}
                  loading="lazy"
                />
              )}
              
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
          {filteredMinerals.map(mineral => {
            const imageId = `grid-${mineral.id}`;
            const imageUrl = getPreviewImage(mineral);
            
            return (
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
                      ref={node => imageRef(node, imageId, imageUrl)}
                      alt={mineral.name} 
                      onError={() => handleImageError(mineral.id)}
                      onLoad={() => handleImageLoad(imageId)}
                      // Only set src directly if already loaded before
                      src={loadedImages[imageId] ? imageUrl : undefined}
                      className={loadedImages[imageId] ? "loaded" : "loading"}
                    />
                  )}
                </div>
                <h3>{mineral.name}</h3>
                {mineral.classification && <p className="mineral-classification">{mineral.classification}</p>}
                {mineral.formula && <p className="mineral-formula">{mineral.formula}</p>}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default StudyMode; 