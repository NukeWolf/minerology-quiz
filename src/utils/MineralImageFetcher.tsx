import { useState } from 'react';
import './MineralImageFetcher.css';

interface MineralImageFetcherProps {
  onImagesSelected: (urls: string[]) => void;
}

const MineralImageFetcher = ({ onImagesSelected }: MineralImageFetcherProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  // APIs to search for mineral images
  const sources = [
    { name: 'Unsplash', url: 'https://api.unsplash.com/search/photos', requires_key: true },
    { name: 'Pexels', url: 'https://api.pexels.com/v1/search', requires_key: true },
    { name: 'Minerals.net', url: '/proxy/minerals-net', requires_key: false },
    { name: 'Mindat.org', url: '/proxy/mindat', requires_key: false }
  ];

  // Since we don't have actual API keys, we'll simulate image search results
  const simulateImageSearch = async (term: string) => {
    setIsLoading(true);
    setError(null);

    try {
      // This would normally be a fetch call to an API
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Generate some "results" based on search term
      // In a real app, you would get these from API calls
      const baseUrl = 'https://source.unsplash.com/random?';
      const simulatedResults = [
        `${baseUrl}${term}&sig=1`,
        `${baseUrl}${term}&rocks&sig=2`,
        `${baseUrl}${term}&crystal&sig=3`,
        `${baseUrl}${term}&mineral&sig=4`,
        `${baseUrl}${term}&geology&sig=5`,
        `${baseUrl}${term}&stone&sig=6`
      ];

      setSearchResults(simulatedResults);
    } catch (err) {
      setError('Failed to search for images. Please try again.');
      console.error('Error searching for images:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      simulateImageSearch(searchTerm);
    }
  };

  const toggleImageSelection = (url: string) => {
    if (selectedImages.includes(url)) {
      setSelectedImages(selectedImages.filter(img => img !== url));
    } else {
      setSelectedImages([...selectedImages, url]);
    }
  };

  const handleSaveSelection = () => {
    if (selectedImages.length > 0) {
      onImagesSelected(selectedImages);
      setSelectedImages([]);
      setSearchResults([]);
      setSearchTerm('');
    }
  };

  return (
    <div className="image-fetcher">
      <h3>Find Mineral Images</h3>

      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter mineral name"
          className="search-input"
          required
        />
        <button type="submit" className="search-button" disabled={isLoading}>
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {searchResults.length > 0 && (
        <>
          <div className="search-results">
            {searchResults.map((url, index) => (
              <div 
                key={index} 
                className={`image-result ${selectedImages.includes(url) ? 'selected' : ''}`}
                onClick={() => toggleImageSelection(url)}
              >
                <img src={url} alt={`Search result ${index + 1}`} />
                <div className="selection-indicator">
                  {selectedImages.includes(url) ? '✓' : '+'}
                </div>
              </div>
            ))}
          </div>

          <div className="action-buttons">
            <button 
              onClick={handleSaveSelection} 
              disabled={selectedImages.length === 0}
              className="save-button"
            >
              Save Selected Images ({selectedImages.length})
            </button>
          </div>
        </>
      )}

      <div className="api-info">
        <p>In a production environment, this tool would use the following APIs:</p>
        <ul>
          {sources.map((source, index) => (
            <li key={index}>{source.name}{source.requires_key ? ' (requires API key)' : ''}</li>
          ))}
        </ul>
        <p>For this demo, we're using placeholder images from Unsplash.</p>
      </div>
    </div>
  );
};

export default MineralImageFetcher; 