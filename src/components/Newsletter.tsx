import { useState } from 'react'
import './Newsletter.css'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && email.includes('@')) {
      setSubmitted(true)
      setError(false)
      // Here you would typically send the email to your backend
      console.log('Newsletter signup:', email)
    } else {
      setError(true)
    }
  }

  return (
    <div className="newsletter-section">
      <div className="container w-container">
        <div className="newsletter-form-container">
          <div className="w-layout-grid newsletter-grid">
            <div className="newsletter-headline-container">
              <h2>Stay in the Loop</h2>
            </div>
            <div className="newsletter-email-form-block">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="form">
                  <div className="email-form-block">
                    <input 
                      className="email-field" 
                      type="email" 
                      placeholder="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <div className="email-submit-block show">
                      <div className="newsletter-submit-embed">
                        <label>
                          <input 
                            type="submit" 
                            value="Get Updates" 
                            className="submit-button"
                          />
                          <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 8.09131L14.0007 8.09131" stroke="#253533"/>
                            <path d="M6.91016 1L14.0014 8.09125" stroke="#253533"/>
                            <path d="M6.91016 15.1824L14.0014 8.09112" stroke="#253533"/>
                          </svg>
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="success-message">
                  <div className="success-content">
                    <div className="success-text">Submitted</div>
                    <div className="svg-check">
                      <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.0342 3.70001L7.41282 18.6075" stroke="#253533"/>
                        <path d="M2.74805 11.912L7.38611 18.7174" stroke="#253533"/>
                      </svg>
                    </div>
                  </div>
                </div>
              )}
              {error && (
                <div className="error-message">
                  <div className="error-text">Oops! Something went wrong while submitting the form.</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter

