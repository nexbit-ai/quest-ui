import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Hero.css'
import { apiService } from '../services/api.service'
import { ResponseType } from '../types/api.types'

// Question categories with their respective questions
const QUESTION_CATEGORIES = {
  'Domain-Based Company Queries': [
    'Show me all B2B and fintech companies',
    'What are the latest SaaS investments?',
    'List blockchain companies in portfolio'
  ],
  'Stage-Based Queries': [
    'Show me all unicorn companies',
    'What seed stage companies have you invested in?',
    'List series A investments'
  ],
  'Location-Based Queries': [
    'What companies are based in New York?',
    'List Bengaluru startups'
  ],
  'Year-Based Queries': [
    'Show me companies founded in 2024',
    'What companies were founded in 2020?',
    'What are the latest investments?',
  ],
  'Investment Thesis Queries': [
    'What is SPC\'s investment thesis?',
    'What do you look for in founders?',
    'What is SPC\'s investment philosophy?'
  ],
  'Company Details Queries': [
    'What does Airtable do?',
    'Who is the founder of Titan?'
  ]
}

// Function to get 3 random sample questions
const getRandomQuestions = (): string[] => {
  const categories = Object.keys(QUESTION_CATEGORIES)
  const shuffledCategories = [...categories].sort(() => Math.random() - 0.5)
  const selectedCategories = shuffledCategories.slice(0, 3)
  
  const selectedQuestions = selectedCategories.map(category => {
    const questions = QUESTION_CATEGORIES[category as keyof typeof QUESTION_CATEGORIES]
    const randomIndex = Math.floor(Math.random() * questions.length)
    return questions[randomIndex]
  })
  
  return selectedQuestions
}

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [sampleQuestions, setSampleQuestions] = useState<string[]>([])
  const navigate = useNavigate()

  // Get random questions on component mount
  useEffect(() => {
    setSampleQuestions(getRandomQuestions())
  }, [])

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

  const handleSuggestionClick = (question: string) => {
    setSearchQuery(question)
    setError(null)
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
                <div className="loading-spinner"></div>
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
          {!error && sampleQuestions.length > 0 && (
            <div className="suggestions-container">
              <div className="suggestions-list">
                {sampleQuestions.map((question, index) => (
                  <button
                    key={index}
                    className="suggestion-pill"
                    onClick={() => handleSuggestionClick(question)}
                    disabled={isLoading}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Hero
