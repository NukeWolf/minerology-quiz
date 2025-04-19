import { useState } from 'react';
import './App.css'
import Quiz from './components/Quiz'
import StudyMode from './components/StudyMode'

function App() {
  const [mode, setMode] = useState<'quiz' | 'study'>('quiz');

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
