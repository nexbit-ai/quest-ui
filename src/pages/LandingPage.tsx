import './LandingPage.css'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate()

  return (
    <div className="landing-page">
      <div className="landing-container">
        {/* Logo placeholder */}
        <div className="landing-logo">
          <a href="https://www.nexbit.ai" target="_blank" rel="noopener noreferrer">
            <img src="/logo_fresh.jpg" alt="Nexbit Logo" />
          </a>
        </div>

        {/* Hero Section */}
        <section className="landing-hero">
          <h1 className="hero-title">Search is Dead.<br />Conversation is the Future.</h1>
          <p className="hero-subtitle">
            Sooner than we can imagine, every shopper will talk to websites,<br />
            asking what suits their skin, what jeans fit like the last pair, or which supplement actually helps them sleep.
          </p>
        </section>

        {/* The Problem */}
        <section className="landing-section">
          <h2 className="section-title">The Problem</h2>
          <p className="section-text">
            Customers are ready to buy, but your search bar doesn't understand <i>intent</i>.<br />
            They ask ChatGPT instead of you, then maybe it redirects to your competitor, you'll never know.<br />
            Every "0 results found" on your website/app = a lost sale.
          </p>
        </section>

        {/* The Fix */}
        <section className="landing-section">
          <h2 className="section-title">The Fix</h2>
          <p className="section-text">
            We turn your site's search bar into an <i>ask</i> bar.<br />
            Users type naturally.<br />
            We find them the exact results they <i>want</i> to buy.
          </p>
          
          <div className="examples">
            <div className="example">
              <span className="example-quote">"Show me vegan supplements for better sleep."</span>
            </div>
            <div className="example">
              <span className="example-quote">"I need a dress for a summer wedding."</span>
            </div>
            <div className="example">
              <span className="example-quote">"Find a red lipstick that's not drying."</span>
            </div>
          </div>
        </section>

        {/* Why Now */}
        <section className="landing-section">
          <h2 className="section-title">Why Now?</h2>
          <p className="section-text">
            Customers are already trained by tools like ChatGPT and Perplexity.<br />
            Your website just needs to catch up.
          </p>
        </section>

        {/* See It in Action */}
        <section className="landing-section action-section">
          {/* <h2 className="section-title">See It in Action</h2> */}
          <p className="section-text">
            We built a live demo for South Park Commons' website.
          </p>


          <p className="section-text">
            Experience how natural language search transforms discovery.
          </p>

          <button 
            className="cta-button"
            onClick={() => navigate('/demo')}
          >
            See It in Action →
          </button>
        </section>
      </div>
    </div>
  )
}

export default LandingPage

