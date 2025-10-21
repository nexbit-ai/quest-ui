import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import CompanyListPage from './pages/CompanyListPage'
import AnswerPage from './pages/AnswerPage'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/results/companies" element={<CompanyListPage />} />
          <Route path="/results/answer" element={<AnswerPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
