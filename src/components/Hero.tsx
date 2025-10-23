import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Hero.css'
import { apiService } from '../services/api.service'
import { ResponseType } from '../types/api.types'

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const response = await apiService.searchChat(searchQuery)
      console.log('Search response:', response)

      // Handle different response types
      switch (response.type) {
        case ResponseType.COMPANY_LIST:
          navigate('/results/companies', { state: response })
          break

        case ResponseType.REDIRECT:
          // Check if URL is absolute or relative
          let redirectUrl: string
          if (response.data.url.startsWith('http://') || response.data.url.startsWith('https://')) {
            // Absolute URL - use as is
            redirectUrl = response.data.url
          } else {
            // Relative URL - redirect to southparkcommons.com
            redirectUrl = `https://www.southparkcommons.com${response.data.url}`
          }
          // Open in new tab
          window.open(redirectUrl, '_blank', 'noopener,noreferrer')
          break

        case ResponseType.ANSWER:
          navigate('/results/answer', { state: response })
          break

        case ResponseType.ERROR:
          setError("Nothing turned up for that. Try asking about a company, team, or domain related to SPC. Curiosity is a good start, though.")
          break

        default:
          setError('Unexpected response type')
      }
    } catch (err) {
      console.error('Search failed:', err)
      setError("Nothing turned up for that. Try asking about a company, team, or domain related to SPC. Curiosity is a good start, though.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="container first w-container">
      <div className="div-block-31">
        <h1 className="primary-heading-center">
          South Park Commons helps you go from -1 to 0
        </h1>
        <p className="paragraph-center">
          SPC is a home for the most talented technologists and founders figuring out what's next. We are a community designed to turn the illegible into the inevitable.
        </p>
        <div className="button-container-copy">
          <div className="search-wrapper">
            <input
              type="text"
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="ask anything"
              disabled={isLoading}
            />
            <button 
              className="search-button" 
              onClick={handleSearch}
              disabled={isLoading || !searchQuery.trim()}
              aria-label="Search"
            >
              {isLoading ? (
                <span className="loading-spinner">⋯</span>
              ) : (
                <span className="arrow-icon">→</span>
              )}
            </button>
          </div>
          {error && (
            <div className="search-error">
              <div className="error-icon">💭</div>
              <div className="error-content">
                <p className="error-main">Nothing turned up for that. Try asking about a company, team, or domain related to SPC.</p>
                <p className="error-tagline">Curiosity is a good start, though.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Hero
