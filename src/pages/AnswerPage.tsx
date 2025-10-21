import { useLocation, useNavigate } from 'react-router-dom'
import { AnswerResponse } from '../types/api.types'
import './AnswerPage.css'

const AnswerPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const data = location.state as AnswerResponse

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

  const { title, content, sections, related_links } = data.data

  return (
    <div className="container page-container">
      <div className="answer-container">
        <button onClick={() => navigate('/')} className="back-link">
          ← Back to Search
        </button>

        <div className="answer-header">
          <h1 className="answer-title">{title}</h1>
        </div>

        <div className="answer-content">
          <div 
            className="answer-main" 
            dangerouslySetInnerHTML={{ __html: content }}
          />

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
            <div className="related-links">
              <h3 className="related-links-title">Related Resources</h3>
              <div className="related-links-list">
                {related_links.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.url} 
                    className="related-link"
                  >
                    {link.title} →
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AnswerPage

