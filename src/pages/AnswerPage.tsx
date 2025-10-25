import { useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AnswerResponse } from '../types/api.types'
import './AnswerPage.css'

const AnswerPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const data = location.state as AnswerResponse
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

  const { title, description, content, companies, sections, related_links } = data.data

  return (
    <div className="container page-container">
      <div className="answer-container">
        <button onClick={() => navigate('/')} className="back-link">
          ← Back to Search
        </button>

        <div className="answer-header">
          <h1 className="answer-title">{title}</h1>
          {description && (
            <p className={`answer-description ${isTyping ? 'typing' : ''}`}>
              {displayedDescription}
            </p>
          )}
        </div>

        <div className="answer-content">
          {content && (
            <div 
              className="answer-main" 
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}

          {companies && companies.length > 0 && (
            <div className="companies-section">
              <h2 className="companies-title">More Details</h2>
              <div className="companies-grid">
                {companies.map((company, index) => (
                  <div key={index} className="company-card">
                    <div className="company-header">
                      {company.logo && (
                        <img 
                          src={company.logo} 
                          alt={`${company.name} logo`} 
                          className="company-logo"
                        />
                      )}
                      <div className="company-info">
                        <h3 className="company-name">{company.name}</h3>
                        {company.founders && (
                          <p className="company-founders">Founded by: {company.founders}</p>
                        )}
                      </div>
                    </div>
                    <p className="company-description">{company.description}</p>
                    <div className="company-details">
                      {company.stage && (
                        <span className="company-stage">{company.stage}</span>
                      )}
                      {company.founded && (
                        <span className="company-founded">Founded {company.founded}</span>
                      )}
                      {company.team_size && (
                        <span className="company-team-size">{company.team_size} employees</span>
                      )}
                    </div>
                    {company.tags && company.tags.length > 0 && (
                      <div className="company-tags">
                        {company.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="company-tag">{tag}</span>
                        ))}
                      </div>
                    )}
                    {company.website && (
                      <a 
                        href={company.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="company-website"
                      >
                        View Details →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {sections && sections.length > 0 && (
            <div className="answer-sections">
              {sections.map((section, index) => (
                <div key={index} className="answer-section">
                  <h2 className="section-heading">{section.heading}</h2>
                  <div 
                    className="section-content" 
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </div>
              ))}
            </div>
          )}

          {related_links && related_links.length > 0 && (
            <div className={`related-links ${companies && companies.length > 0 ? 'with-companies' : ''}`}>
              <h3 className="related-links-title">Related Resources</h3>
              <div className="related-links-list">
                {related_links.map((link, index) => {
                  // Check if URL is absolute or relative
                  let redirectUrl: string
                  if (link.url.startsWith('http://') || link.url.startsWith('https://')) {
                    // Absolute URL - use as is
                    redirectUrl = link.url
                  } else {
                    // Relative URL - redirect to southparkcommons.com
                    redirectUrl = `https://www.southparkcommons.com${link.url}`
                  }
                  
                  return (
                    <a 
                      key={index} 
                      href={redirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="related-link"
                    >
                      {link.title} →
                    </a>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AnswerPage

