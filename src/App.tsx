import { useState, useRef, useEffect } from 'react';
import './App.css'
import Quiz from './components/Quiz'
import StudyMode from './components/StudyMode'

function App() {
  const [mode, setMode] = useState<'quiz' | 'study'>('quiz');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const labFiles = [
    { name: "Oxides, Phosphates & Halides", file: "Oxide&Phosphates&Halides.pdf" },
    { name: "Sulfides & Native Elements", file: "Sulfides&Native.pdf" },
    { name: "Sorosilicates & Cyclosilicates", file: "Sorosillicates and Cyclosillicates.pdf" },
    { name: "Phyllosilicates", file: "Phyllosillicates.pdf" },
    { name: "Inosilicates", file: "Inosillicates.pdf" },
    { name: "Nesosilicates", file: "Nesosillicates.pdf" },
    { name: "Tectosilicates", file: "Tectosillicates.pdf" }
  ];

  return (
    <div className="app">
      <header className="app-header">
        <h1>Minerology Quiz</h1>
        <p>Test your knowledge of minerals</p>
        <nav className="app-nav">
          <button 
            className={`nav-btn ${mode === 'quiz' ? 'active' : ''}`}
            onClick={() => setMode('quiz')}
          >
            Quiz Mode
          </button>
          <button 
            className={`nav-btn ${mode === 'study' ? 'active' : ''}`}
            onClick={() => setMode('study')}
          >
            Study Mode
          </button>
          <div className="dropdown-container" ref={dropdownRef}>
            <button 
              className="nav-btn dropdown-btn"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Labs <span className="dropdown-arrow">▼</span>
            </button>
            {dropdownOpen && (
              <div className="dropdown-content">
                {labFiles.map((lab, index) => (
                  <a 
                    key={index} 
                    href={`/labs/${lab.file}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {lab.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>
      </header>
      <main>
        {mode === 'quiz' ? <Quiz /> : <StudyMode />}
      </main>
      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Minerology Quiz</p>
      </footer>
      </div>
  )
}

export default App
