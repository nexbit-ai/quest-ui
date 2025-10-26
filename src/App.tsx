import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import CompanyListPage from './pages/CompanyListPage'
import AnswerPage from './pages/AnswerPage'

function AppContent() {
  const location = useLocation()
  const showHeader = location.pathname !== '/'

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/demo" element={<HomePage />} />
        <Route path="/results/companies" element={<CompanyListPage />} />
        <Route path="/results/answer" element={<AnswerPage />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="app">
        <AppContent />
      </div>
    </Router>
  )
}

export default App
