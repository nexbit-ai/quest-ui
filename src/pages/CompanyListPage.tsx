import { useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CompanyListResponse } from '../types/api.types'
import './CompanyListPage.css'

const CompanyListPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const data = location.state as CompanyListResponse
  const [displayedDescription, setDisplayedDescription] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  // Typewriter effect for description
  useEffect(() => {
    if (!data?.data?.description) return

    const description = data.data.description
    let currentIndex = 0
    setIsTyping(true)

    const typeInterval = setInterval(() => {
      if (currentIndex < description.length) {
        setDisplayedDescription(description.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        setIsTyping(false)
        clearInterval(typeInterval)
      }
    }, 15) // Adjust speed here (lower = faster)

    return () => clearInterval(typeInterval)
  }, [data?.data?.description])

  if (!data || !data.data) {
    return (
      <div className="container page-container">
        <div className="error-state">
          <h2>No data available</h2>
          <button onClick={() => navigate('/')} className="back-button">
            Go Back Home
          </button>
        </div>
      </div>
    )
  }

  const { title, description, companies, total_count } = data.data

  return (
    <div className="container page-container">
      <div className="page-header">
        <button onClick={() => navigate('/')} className="back-link">
          ← Back to Search
        </button>
        <h1 className="page-title">{title}</h1>
        {description && (
          <p className={`page-description ${isTyping ? 'typing' : ''}`}>
            {displayedDescription}
          </p>
        )}
        <div className="result-count">{total_count} {total_count === 1 ? 'company' : 'companies'} found</div>
      </div>

      <div className="company-grid">
        {companies.map((company) => (
          <div key={company.id} className="company-card">
            {company.logo && (
              <div className="company-logo">
                <img src={company.logo} alt={`${company.name} logo`} />
              </div>
            )}
            <div className="company-content">
              <h3 className="company-name">{company.name}</h3>
              <p className="company-description">{company.description}</p>
              
              <div className="company-meta">
                {company.stage && (
                  <span className="company-badge">{company.stage}</span>
                )}
                {company.founded && (
                  <span className="company-info">Founded: {company.founded}</span>
                )}
                {company.team_size && (
                  <span className="company-info">Team: {company.team_size}</span>
                )}
              </div>

              {company.tags && company.tags.length > 0 && (
                <div className="company-tags">
                  {company.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              )}

              {company.website && (
                <a 
                  href={company.website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="company-link"
                >
                  View Details →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CompanyListPage

