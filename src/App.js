import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quiz from './components/Quiz'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import "./App.css"
function App() {
  return (
    <Router>
            <div style={{ display: 'flex' }}>
                <Sidebar />
                <Routes>
                    <Route path="/dashboard" element={<MainContent />} />
                    <Route path="/exams" element={<Quiz />} />
                    {/* Add other routes here if needed */}
                </Routes>
            </div>
        </Router>
  )
}

export default App