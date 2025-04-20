import { useState, useEffect, useRef } from 'react';
import { minerals, Mineral } from '../data/minerals';
import MineralPlaceholder from './MineralPlaceholder';
import useLocalStorage from '../hooks/useLocalStorage';
import './Quiz.css';

interface QuizStats {
  score: number;
  totalQuestions: number;
}

interface SeenImages {
  [mineralId: string]: number[];  // Tracks indices of seen images for each mineral
}

const Quiz = () => {
  const [currentMineral, setCurrentMineral] = useState<Mineral | null>(null);
  const [options, setOptions] = useState<Mineral[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [quizStats, setQuizStats] = useLocalStorage<QuizStats>('mineralQuizStats', { score: 0, totalQuestions: 0 });
  const [showHint, setShowHint] = useState(false);
  const [currentHintIndex, setCurrentHintIndex] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [seenImages, setSeenImages] = useLocalStorage<SeenImages>('mineralSeenImages', {});
  const [hardMode, setHardMode] = useLocalStorage<boolean>('mineralQuizHardMode', false);
  const [descriptionMode, setDescriptionMode] = useLocalStorage<boolean>('mineralQuizDescriptionMode', false);
  const [textAnswer, setTextAnswer] = useState('');
  const [showAutocomplete, setShowAutocomplete] = useLocalStorage<boolean>('mineralQuizAutocomplete', true);
  const [autocompleteOptions, setAutocompleteOptions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Generate a new question
  const generateQuestion = () => {
    setIsCorrect(null);
    setSelectedOption(null);
    setShowHint(false);
    setCurrentHintIndex(0);
    setImageError(false);
    setTextAnswer('');
    setAutocompleteOptions([]);
    
    // Randomly select a mineral for the question
    const randomIndex = Math.floor(Math.random() * minerals.length);
    const mineral = minerals[randomIndex];
    setCurrentMineral(mineral);
    
    // Generate multiple choice options (including the correct one)
    const optionsSet = new Set<Mineral>([mineral]);
    
    while (optionsSet.size < Math.min(4, minerals.length)) {
      const randomOptionIndex = Math.floor(Math.random() * minerals.length);
      optionsSet.add(minerals[randomOptionIndex]);
    }
    
    // Convert set to array and shuffle
    const optionsArray = Array.from(optionsSet);
    for (let i = optionsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]];
    }
    
    setOptions(optionsArray);

    // Select an unseen image if possible and not in description mode
    if (mineral.imageUrls.length > 0 && !descriptionMode) {
      selectUniqueImage(mineral);
    } else {
      setCurrentImageIndex(0);
    }
  };

  // Select an image that hasn't been seen before if possible
  const selectUniqueImage = (mineral: Mineral) => {
    const mineralSeenImages = seenImages[mineral.id] || [];
    
    // If we've seen all images for this mineral, reset the tracking to loop through again
    if (mineralSeenImages.length >= mineral.imageUrls.length) {
      const updatedSeenImages = {...seenImages};
      delete updatedSeenImages[mineral.id];
      setSeenImages(updatedSeenImages);
      setCurrentImageIndex(Math.floor(Math.random() * mineral.imageUrls.length));
      return;
    }
    
    // Find unseen image indices
    const unseenIndices = Array.from(
      { length: mineral.imageUrls.length }, 
      (_, i) => i
    ).filter(index => !mineralSeenImages.includes(index));
    
    // Select a random unseen image
    const randomUnseenIndex = unseenIndices[Math.floor(Math.random() * unseenIndices.length)];
    setCurrentImageIndex(randomUnseenIndex);
    
    // Add to seen images
    setSeenImages({
      ...seenImages,
      [mineral.id]: [...mineralSeenImages, randomUnseenIndex]
    });
  };

  // Skip current image and show a different one for the same mineral
  const handleSkipImage = () => {
    if (!currentMineral || currentMineral.imageUrls.length <= 1) return;
    
    setImageError(false);
    
    // Choose a different image index randomly
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * currentMineral.imageUrls.length);
    } while (newIndex === currentImageIndex && currentMineral.imageUrls.length > 1);
    
    setCurrentImageIndex(newIndex);
  };

  // Initialize the quiz
  useEffect(() => {
    generateQuestion();
  }, []);

  // Focus the input field in hard mode when a new question is generated
  useEffect(() => {
    if (hardMode && inputRef.current && isCorrect === null) {
      inputRef.current.focus();
    }
  }, [hardMode, currentMineral, isCorrect]);

  // Handle Enter key press to proceed to next question
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // If the answer has been revealed and Enter key is pressed, move to the next question
      if (isCorrect !== null && event.key === 'Enter') {
        handleNextQuestion();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    
    // Clean up the event listener when component unmounts or deps change
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isCorrect]); // Only re-attach when isCorrect changes

  // Handle user selection (multiple choice)
  const handleOptionSelect = (mineralId: string) => {
    if (isCorrect !== null) return; // Prevent multiple selections after answer is revealed
    
    setSelectedOption(mineralId);
    const correct = mineralId === currentMineral?.id;
    setIsCorrect(correct);
    
    updateQuizStats(correct);
  };

  // Handle text input change (hard mode)
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTextAnswer(value);
    
    // Update autocomplete options if enabled
    if (showAutocomplete && value) {
      const filteredOptions = minerals
        .filter(m => m.name.toLowerCase().includes(value.toLowerCase()))
        .map(m => m.name)
        .slice(0, 5); // Limit to 5 suggestions
      setAutocompleteOptions(filteredOptions);
    } else {
      setAutocompleteOptions([]);
    }
  };

  // Handle autocomplete option selection
  const handleAutocompleteSelect = (mineralName: string) => {
    setTextAnswer(mineralName);
    setAutocompleteOptions([]);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Submit text answer (hard mode)
  const handleTextSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isCorrect !== null || !textAnswer.trim()) return;

    // Check if the answer is correct (allowing for case insensitive matching and alternative spellings)
    const normalizedAnswer = textAnswer.trim().toLowerCase();
    const correctAnswer = currentMineral?.name.toLowerCase() || '';
    
    // Check if the answer is correct or close enough (simple string matching)
    const correct = normalizedAnswer === correctAnswer;
    
    setIsCorrect(correct);
    updateQuizStats(correct);
  };

  // Update quiz statistics
  const updateQuizStats = (correct: boolean) => {
    if (correct) {
      setQuizStats(prev => ({ 
        ...prev, 
        score: prev.score + 1,
        totalQuestions: prev.totalQuestions + 1
      }));
    } else {
      setQuizStats(prev => ({ 
        ...prev, 
        totalQuestions: prev.totalQuestions + 1
      }));
    }
  };

  // Toggle hard mode
  const toggleHardMode = () => {
    setHardMode(!hardMode);
    // Reset current question when toggling modes
    generateQuestion();
  };

  // Toggle description mode
  const toggleDescriptionMode = () => {
    setDescriptionMode(!descriptionMode);
    // Reset current question when toggling modes
    generateQuestion();
  };

  // Toggle autocomplete
  const toggleAutocomplete = () => {
    setShowAutocomplete(!showAutocomplete);
    setAutocompleteOptions([]);
  };

  // Reset stats and seen images
  const handleResetStats = () => {
    if (window.confirm('Are you sure you want to reset your quiz stats and seen images?')) {
      setQuizStats({ score: 0, totalQuestions: 0 });
      setSeenImages({});
    }
  };

  // Get next question
  const handleNextQuestion = () => {
    generateQuestion();
  };

  // Show hint
  const handleShowHint = () => {
    if (!showHint) {
      setShowHint(true);
    } else if (currentMineral?.hints && currentHintIndex < currentMineral.hints.length - 1) {
      setCurrentHintIndex(prev => prev + 1);
    }
  };

  // Handle image loading error
  const handleImageError = () => {
    setImageError(true);
  };

  // Get current image URL
  const getCurrentImageUrl = () => {
    if (!currentMineral || !currentMineral.imageUrls.length) return "";
    return currentMineral.imageUrls[currentImageIndex];
  };

  // Generate a physical description for the mineral
  const getPhysicalDescription = (mineral: Mineral) => {
    if (!mineral) return [];

    const descriptions = [];

    if (mineral.color) {
      descriptions.push(`Color: ${mineral.color}`);
    }
    
    if (mineral.luster) {
      descriptions.push(`Luster: ${mineral.luster}`);
    }
    
    if (mineral.hardness) {
      descriptions.push(`Hardness: ${mineral.hardness}`);
    }
    
    if (mineral.crystalHabit) {
      descriptions.push(`Crystal Habit: ${mineral.crystalHabit}`);
    }

    if (mineral.fracture) {
      descriptions.push(`Fracture: ${mineral.fracture}`);
    }

    if (mineral.cleavage) {
      descriptions.push(`Cleavage: ${mineral.cleavage}`);
    }
    
    if (mineral.specificGravity) {
      descriptions.push(`Specific Gravity: ${mineral.specificGravity}`);
    }

    // Filter out empty descriptions and return
    return descriptions.filter(desc => desc);
  };

  if (!currentMineral) return <div>Loading...</div>;

  // Determine if there are more hints available
  const hasMoreHints = currentMineral?.hints && currentHintIndex < currentMineral.hints.length - 1;

  // Check if the mineral has multiple images
  const hasMultipleImages = currentMineral?.imageUrls.length > 1;

  // Get physical description
  const physicalDescription = getPhysicalDescription(currentMineral);

  return (
    <div className="quiz-container">
      <div className="quiz-mode-toggles">
        <div className="mode-toggle">
          <label className="toggle-label" htmlFor="hardMode">
            Hard Mode
            <div className="toggle-switch">
              <input
                id="hardMode"
                type="checkbox"
                checked={hardMode}
                onChange={toggleHardMode}
              />
              <span className="toggle-slider"></span>
            </div>
          </label>
        </div>
        
        <div className="mode-toggle">
          <label className="toggle-label" htmlFor="descriptionMode">
            Description Mode
            <div className="toggle-switch">
              <input
                id="descriptionMode"
                type="checkbox"
                checked={descriptionMode}
                onChange={toggleDescriptionMode}
              />
              <span className="toggle-slider"></span>
            </div>
          </label>
        </div>
        
        {hardMode && (
          <div className="mode-toggle">
            <label className="toggle-label" htmlFor="autocomplete">
              Autocomplete
              <div className="toggle-switch">
                <input
                  id="autocomplete"
                  type="checkbox"
                  checked={showAutocomplete}
                  onChange={toggleAutocomplete}
                />
                <span className="toggle-slider"></span>
              </div>
            </label>
          </div>
        )}
      </div>

      <div className="stats">
        <p>Score: {quizStats.score}/{quizStats.totalQuestions}</p>
        {quizStats.totalQuestions > 0 && (
          <button className="reset-btn" onClick={handleResetStats}>
            Reset Stats
          </button>
        )}
      </div>
      
      <div className="disclaimer">
        <p>Disclaimer: These minerals are really hard to identify and have been randomly selected from mindat. 
        They may not be the best representation of the mineral. Use this as a study tool at your own caution.</p>
      </div>
      
      <div className="question">
        <h2>Identify this mineral:</h2>
        
        {descriptionMode ? (
          <div className="mineral-description">
            <h3>Physical Properties:</h3>
            <ul>
              {physicalDescription.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
            {physicalDescription.length === 0 && (
              <p className="no-description">No physical description available for this mineral.</p>
            )}
          </div>
        ) : (
          <div className="mineral-image">
            {imageError ? (
              <MineralPlaceholder />
            ) : (
              <img 
                src={getCurrentImageUrl()} 
                alt="Mystery mineral" 
                onError={handleImageError}
              />
            )}
          </div>
        )}
        
        {isCorrect === null && hasMultipleImages && !descriptionMode && (
          <button className="skip-image-btn" onClick={handleSkipImage}>
            Skip Image
          </button>
        )}
      </div>
      
      {hardMode ? (
        <form onSubmit={handleTextSubmit} className="text-answer-form">
          <div className="input-container">
            <input
              ref={inputRef}
              type="text"
              value={textAnswer}
              onChange={handleTextChange}
              placeholder="Enter mineral name..."
              disabled={isCorrect !== null}
              className="text-input"
            />
            {showAutocomplete && autocompleteOptions.length > 0 && isCorrect === null && (
              <div className="autocomplete-dropdown">
                {autocompleteOptions.map((option, index) => (
                  <div 
                    key={index} 
                    className="autocomplete-item"
                    onClick={() => handleAutocompleteSelect(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
          <button 
            type="submit" 
            className="submit-btn"
            disabled={isCorrect !== null || !textAnswer.trim()}
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="options">
          {options.map(option => (
            <button
              key={option.id}
              className={`option-btn ${selectedOption === option.id ? (isCorrect ? 'correct' : 'incorrect') : ''} ${isCorrect === false && currentMineral.id === option.id ? 'correct-answer' : ''}`}
              onClick={() => handleOptionSelect(option.id)}
              disabled={isCorrect !== null}
            >
              {option.name}
            </button>
          ))}
        </div>
      )}
      
      {isCorrect !== null && (
        <div className="feedback">
          <h3>{isCorrect ? 'Correct!' : 'Incorrect!'}</h3>
          <div className="mineral-info">
            <h4>{currentMineral.name}</h4>
            {currentMineral.formula && <p>Formula: {currentMineral.formula}</p>}
            {currentMineral.classification && <p>Classification: {currentMineral.classification}</p>}
            {currentMineral.characteristics && <p>{currentMineral.characteristics}</p>}
          </div>
          <button className="next-btn" onClick={handleNextQuestion}>
            Next Question <span className="key-hint">(or press Enter)</span>
          </button>
        </div>
      )}
      
      {isCorrect === null && (
        <div className="hint-section">
          <button className="hint-btn" onClick={handleShowHint}>
            {!showHint ? 'Show Hint' : hasMoreHints ? 'Next Hint' : 'No More Hints'}
          </button>
          
          {showHint && currentMineral.hints && currentMineral.hints.length > 0 && (
            <div className="hint">
              <p>{currentMineral.hints[currentHintIndex]}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz; 