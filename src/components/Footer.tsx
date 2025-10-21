import './Footer.css'

const Footer = () => {
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
            <div className="footer-text footer-copyright">
              © 2025 All rights reserved.<br/>
            </div>
          </div>
          <div className="spacer"></div>
          <div className="footer-nav-links">
            <ul className="footer-link-list">
              <li className="footer-link">
                <a href="/our-story" className="link-block">What is -1 to 0</a>
              </li>
              <li className="footer-link">
                <a href="/community" className="link-block">Community</a>
              </li>
              <li className="footer-link">
                <a href="/founder-fellowship" className="link-block">Fellowship</a>
              </li>
              <li className="footer-link">
                <a href="/companies" className="link-block">Companies</a>
              </li>
              <li className="footer-link">
                <a href="/library" className="link-block">Library</a>
              </li>
              <li className="footer-link">
                <a href="/faq" className="link-block">FAQ</a>
              </li>
              <li className="footer-link">
                <a href="/apply" className="link-block">Apply</a>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <ul className="footer-link-list">
              <li className="footer-link">
                <a href="https://twitter.com/southpkcommons" className="link-block">Twitter</a>
              </li>
              <li className="footer-link">
                <a href="https://www.linkedin.com/company/southparkcommons/" className="link-block">LinkedIn</a>
              </li>
              <li className="footer-link">
                <a href="https://www.youtube.com/channel/UCMR-rPSUI34DRQXUkvFuIUQ" className="link-block">YouTube</a>
              </li>
              <li className="footer-link">
                <a href="https://facebook.com/southpkcommons" className="link-block">Facebook</a>
              </li>
              <li className="footer-link">
                <a href="https://www.instagram.com/southparkcommons/" className="link-block">Instagram</a>
              </li>
              <li className="footer-link">
                <a href="/privacy-policy" className="link-block">Privacy Policy</a>
              </li>
              <li className="footer-link">
                <a href="/terms-of-service" className="link-block">Terms of Service</a>
              </li>
              <li className="footer-link jobs">
                <a href="https://jobs.southparkcommons.com/" className="link-block">SPC Company Jobs</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="w-layout-grid footer-grid-mobile">
          <div className="links-grid">
            <div className="footer-nav-links">
              <ul className="footer-link-list">
                <li className="footer-link">
                  <a href="/our-story" className="link-block">What is -1 to 0</a>
                </li>
                <li className="footer-link">
                  <a href="/community" className="link-block">Community</a>
                </li>
                <li className="footer-link">
                  <a href="/founder-fellowship" className="link-block">Fellowship</a>
                </li>
                <li className="footer-link">
                  <a href="/companies" className="link-block">Companies</a>
                </li>
                <li className="footer-link">
                  <a href="/library" className="link-block">Library</a>
                </li>
                <li className="footer-link">
                  <a href="/faq" className="link-block">FAQ</a>
                </li>
                <li className="footer-link">
                  <a href="/apply" className="link-block">Apply</a>
                </li>
              </ul>
            </div>
            <div className="footer-social">
              <ul className="footer-link-list">
                <li className="footer-link">
                  <a href="https://twitter.com/southpkcommons" className="link-block">Twitter</a>
                </li>
                <li className="footer-link">
                  <a href="https://www.linkedin.com/company/southparkcommons/" className="link-block">LinkedIn</a>
                </li>
                <li className="footer-link">
                  <a href="https://www.youtube.com/channel/UCMR-rPSUI34DRQXUkvFuIUQ" className="link-block">YouTube</a>
                </li>
                <li className="footer-link">
                  <a href="https://facebook.com/southpkcommons" className="link-block">Facebook</a>
                </li>
                <li className="footer-link">
                  <a href="https://www.instagram.com/southparkcommons/" className="link-block">Instagram</a>
                </li>
                <li className="footer-link">
                  <a href="/privacy-policy" className="link-block">Privacy Policy</a>
                </li>
                <li className="footer-link">
                  <a href="/terms-of-service" className="link-block">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-jobs">
            <ul className="footer-link-list">
              <li className="footer-link jobs">
                <a href="https://jobs.southparkcommons.com/" className="link-block">SPC Company Jobs</a>
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
            <div className="footer-text footer-copyright">
              © 2025 All rights reserved.<br/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

