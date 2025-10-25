import './Footer.css'

const Footer = () => {
  // Disable all footer links for demo
  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }
  return (
    <div className="footer-section">
      <div className="container w-container">
        <div className="w-layout-grid footer-grid-desktop">
          <div className="footer-address-container">
            <div className="footer-text">
              South Park Commons<br/>
            </div>
            <div className="footer-text footer-address">
              380 Brannan St, San Francisco, CA<br/>
            </div>
            {/* <div className="footer-text footer-copyright">
              © 2025 All rights reserved.<br/>
            </div> */}
          </div>
          <div className="spacer"></div>
          <div className="footer-nav-links">
            <ul className="footer-link-list">
              <li className="footer-link">
                <a href="/our-story" className="link-block" onClick={handleLinkClick}>What is -1 to 0</a>
              </li>
              <li className="footer-link">
                <a href="/community" className="link-block" onClick={handleLinkClick}>Community</a>
              </li>
              <li className="footer-link">
                <a href="/founder-fellowship" className="link-block" onClick={handleLinkClick}>Fellowship</a>
              </li>
              <li className="footer-link">
                <a href="/companies" className="link-block" onClick={handleLinkClick}>Companies</a>
              </li>
              <li className="footer-link">
                <a href="/library" className="link-block" onClick={handleLinkClick}>Library</a>
              </li>
              <li className="footer-link">
                <a href="/faq" className="link-block" onClick={handleLinkClick}>FAQ</a>
              </li>
              <li className="footer-link">
                <a href="/apply" className="link-block" onClick={handleLinkClick}>Apply</a>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <ul className="footer-link-list">
              <li className="footer-link">
                <a href="https://twitter.com/southpkcommons" className="link-block" onClick={handleLinkClick}>Twitter</a>
              </li>
              <li className="footer-link">
                <a href="https://www.linkedin.com/company/southparkcommons/" className="link-block" onClick={handleLinkClick}>LinkedIn</a>
              </li>
              <li className="footer-link">
                <a href="https://www.youtube.com/channel/UCMR-rPSUI34DRQXUkvFuIUQ" className="link-block" onClick={handleLinkClick}>YouTube</a>
              </li>
              <li className="footer-link">
                <a href="https://facebook.com/southpkcommons" className="link-block" onClick={handleLinkClick}>Facebook</a>
              </li>
              <li className="footer-link">
                <a href="https://www.instagram.com/southparkcommons/" className="link-block" onClick={handleLinkClick}>Instagram</a>
              </li>
              <li className="footer-link">
                <a href="/privacy-policy" className="link-block" onClick={handleLinkClick}>Privacy Policy</a>
              </li>
              <li className="footer-link">
                <a href="/terms-of-service" className="link-block" onClick={handleLinkClick}>Terms of Service</a>
              </li>
              <li className="footer-link jobs">
                <a href="https://jobs.southparkcommons.com/" className="link-block" onClick={handleLinkClick}>SPC Company Jobs</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="w-layout-grid footer-grid-mobile">
          <div className="links-grid">
            <div className="footer-nav-links">
              <ul className="footer-link-list">
                <li className="footer-link">
                  <a href="/our-story" className="link-block" onClick={handleLinkClick}>What is -1 to 0</a>
                </li>
                <li className="footer-link">
                  <a href="/community" className="link-block" onClick={handleLinkClick}>Community</a>
                </li>
                <li className="footer-link">
                  <a href="/founder-fellowship" className="link-block" onClick={handleLinkClick}>Fellowship</a>
                </li>
                <li className="footer-link">
                  <a href="/companies" className="link-block" onClick={handleLinkClick}>Companies</a>
                </li>
                <li className="footer-link">
                  <a href="/library" className="link-block" onClick={handleLinkClick}>Library</a>
                </li>
                <li className="footer-link">
                  <a href="/faq" className="link-block" onClick={handleLinkClick}>FAQ</a>
                </li>
                <li className="footer-link">
                  <a href="/apply" className="link-block" onClick={handleLinkClick}>Apply</a>
                </li>
              </ul>
            </div>
            <div className="footer-social">
              <ul className="footer-link-list">
                <li className="footer-link">
                  <a href="https://twitter.com/southpkcommons" className="link-block" onClick={handleLinkClick}>Twitter</a>
                </li>
                <li className="footer-link">
                  <a href="https://www.linkedin.com/company/southparkcommons/" className="link-block" onClick={handleLinkClick}>LinkedIn</a>
                </li>
                <li className="footer-link">
                  <a href="https://www.youtube.com/channel/UCMR-rPSUI34DRQXUkvFuIUQ" className="link-block" onClick={handleLinkClick}>YouTube</a>
                </li>
                <li className="footer-link">
                  <a href="https://facebook.com/southpkcommons" className="link-block" onClick={handleLinkClick}>Facebook</a>
                </li>
                <li className="footer-link">
                  <a href="https://www.instagram.com/southparkcommons/" className="link-block" onClick={handleLinkClick}>Instagram</a>
                </li>
                <li className="footer-link">
                  <a href="/privacy-policy" className="link-block" onClick={handleLinkClick}>Privacy Policy</a>
                </li>
                <li className="footer-link">
                  <a href="/terms-of-service" className="link-block" onClick={handleLinkClick}>Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-jobs">
            <ul className="footer-link-list">
              <li className="footer-link jobs">
                <a href="https://jobs.southparkcommons.com/" className="link-block" onClick={handleLinkClick}>SPC Company Jobs</a>
              </li>
            </ul>
          </div>
          <div className="footer-address-container">
            <div className="footer-text">
              South Park Commons<br/>
            </div>
            <div className="footer-text footer-address">
              380 Brannan St, San Francisco, CA<br/>
            </div>
            {/* <div className="footer-text footer-copyright">
              © 2025 All rights reserved.<br/>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

