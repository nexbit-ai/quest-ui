import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Disable all navigation links for demo
  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuOpen])

  return (
    <>
      <div className={`navigation v2 w-nav ${menuOpen ? 'menu-open' : ''}`}>
        <div className="nav-container-wrapper">
          <div className="w-layout-blockcontainer nav-container w-container">
            <div className="nav-v2_container" ref={menuRef}>
              <div className="nav-v2_desktop-wrapper">
                <Link to="/" className="icon-link w-inline-block" onClick={handleLinkClick}>
                  <div className="svg-spc-logo w-embed">
                    <svg width="29" height="33" viewBox="0 0 29 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.8348 21.6665C21.1611 22.3396 20.3591 22.8733 19.4756 23.2364C18.5921 23.5995 17.6446 23.7847 16.6883 23.7815C14.7597 23.7792 12.9108 23.0183 11.5471 21.6656C10.1834 20.3129 9.41624 18.4789 9.41392 16.5659C9.41508 14.6522 10.1817 12.8172 11.5456 11.4636C12.9094 10.11 14.759 9.34837 16.6883 9.34606C17.6447 9.34233 18.5923 9.52736 19.4759 9.89048C20.3595 10.2536 21.1614 10.7875 21.8348 11.4611L22.0673 11.6918L28.5696 5.24209H21.418L16.6883 0.550781L11.9631 5.24209H5.27657V11.8746L0.546875 16.5659L5.27657 21.2529V27.8854H11.9631L16.6883 32.5767L21.418 27.8854H28.5696L22.0673 21.4357L21.8348 21.6665ZM10.8662 21.8841L5.93903 26.7713V16.8923H8.77776C8.84885 18.7464 9.58114 20.5154 10.8442 21.8841H10.8662ZM8.77776 16.2265H5.93903V6.35622L10.8662 11.2435C9.59255 12.6094 8.85066 14.3805 8.77336 16.2395L8.77776 16.2265ZM5.26779 16.2265H1.79729L5.26779 12.7841V16.2265ZM26.9725 5.88192L22.0542 10.7604C20.6736 9.49838 18.8848 8.76551 17.0086 8.69327V5.88192H26.9725ZM16.3505 5.22913H12.8844L16.3505 1.78667V5.22913ZM17.0086 1.78667L20.4791 5.22913H17.0086V1.78667ZM12.0903 5.88192H16.3505V8.69752C14.4784 8.77402 12.6947 9.50836 11.3181 10.7692L6.39095 5.88192H12.0903ZM1.79729 16.8793H5.26779V20.3173L1.79729 16.8793ZM6.39095 27.2195L11.3181 22.3322C12.6947 23.593 14.4784 24.3274 16.3505 24.4039V27.2195H6.39095ZM17.0086 27.8722H20.4791L17.0086 31.3147V27.8722ZM16.3505 31.3147L12.8844 27.8722H16.3505V31.3147ZM21.2732 27.2195H17.0086V24.4081C18.8842 24.3371 20.6729 23.6059 22.0542 22.3454L26.9725 27.2195H21.2732Z" fill="#253533"/>
                    </svg>
                  </div>
                </Link>
                <div className="nav-v2_links">
                  <a href="/community" className="nav-v2_link-desktop" onClick={handleLinkClick}>Community</a>
                  <a href="/founder-fellowship" className="nav-v2_link-desktop" onClick={handleLinkClick}>Fellowship</a>
                  <a href="/companies" className="nav-v2_link-desktop" onClick={handleLinkClick}>Companies</a>
                  <div className="nav-v2_menu-button-desktop w-nav-button" onClick={() => setMenuOpen(!menuOpen)}>
                    <div className="menu-icon4">
                      <div className="menu-icon4_wrapper">
                        <div className="menu-icon4_line-top"></div>
                        <div className="menu-icon4_line-middle"></div>
                        <div className="menu-icon4_line-bottom"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nav-v2_mobile-wrapper">
                <a href="/apply" className="nav-v2_link-mobile" onClick={handleLinkClick}>Apply</a>
                <Link to="/" className="icon-link-v2 w-inline-block" onClick={handleLinkClick}>
                  <div className="svg-spc-logo w-embed">
                    <svg width="29" height="33" viewBox="0 0 29 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.8348 21.6665C21.1611 22.3396 20.3591 22.8733 19.4756 23.2364C18.5921 23.5995 17.6446 23.7847 16.6883 23.7815C14.7597 23.7792 12.9108 23.0183 11.5471 21.6656C10.1834 20.3129 9.41624 18.4789 9.41392 16.5659C9.41508 14.6522 10.1817 12.8172 11.5456 11.4636C12.9094 10.11 14.759 9.34837 16.6883 9.34606C17.6447 9.34233 18.5923 9.52736 19.4759 9.89048C20.3595 10.2536 21.1614 10.7875 21.8348 11.4611L22.0673 11.6918L28.5696 5.24209H21.418L16.6883 0.550781L11.9631 5.24209H5.27657V11.8746L0.546875 16.5659L5.27657 21.2529V27.8854H11.9631L16.6883 32.5767L21.418 27.8854H28.5696L22.0673 21.4357L21.8348 21.6665ZM10.8662 21.8841L5.93903 26.7713V16.8923H8.77776C8.84885 18.7464 9.58114 20.5154 10.8442 21.8841H10.8662ZM8.77776 16.2265H5.93903V6.35622L10.8662 11.2435C9.59255 12.6094 8.85066 14.3805 8.77336 16.2395L8.77776 16.2265ZM5.26779 16.2265H1.79729L5.26779 12.7841V16.2265ZM26.9725 5.88192L22.0542 10.7604C20.6736 9.49838 18.8848 8.76551 17.0086 8.69327V5.88192H26.9725ZM16.3505 5.22913H12.8844L16.3505 1.78667V5.22913ZM17.0086 1.78667L20.4791 5.22913H17.0086V1.78667ZM12.0903 5.88192H16.3505V8.69752C14.4784 8.77402 12.6947 9.50836 11.3181 10.7692L6.39095 5.88192H12.0903ZM1.79729 16.8793H5.26779V20.3173L1.79729 16.8793ZM6.39095 27.2195L11.3181 22.3322C12.6947 23.593 14.4784 24.3274 16.3505 24.4039V27.2195H6.39095ZM17.0086 27.8722H20.4791L17.0086 31.3147V27.8722ZM16.3505 31.3147L12.8844 27.8722H16.3505V31.3147ZM21.2732 27.2195H17.0086V24.4081C18.8842 24.3371 20.6729 23.6059 22.0542 22.3454L26.9725 27.2195H21.2732Z" fill="#253533"/>
                    </svg>
                  </div>
                </Link>
                <div className="nav-v2_menu-button-mobile w-nav-button" onClick={() => setMenuOpen(!menuOpen)}>
                  <div className="nav-v2_menu-button-mobile-text-menu">Menu</div>
                  <div className="nav-v2_menu-button-mobile-text-close">Close</div>
                </div>
              </div>
              <nav className={`nav-v2_menu w-nav-menu ${menuOpen ? 'open' : ''}`}>
                <div className="nav-v2_menu-wrapper">
                  <div className="nav-v2_menu-links-wrapper">
                    <a href="https://minusone.com" className="nav-v2_menu-link _1-dropdown-menu-link w-nav-link" onClick={handleLinkClick}>-1</a>
                    <a href="/our-story" className="nav-v2_menu-link w-nav-link" onClick={handleLinkClick}>Our Story</a>
                    <a href="/community" className="nav-v2_menu-link w-nav-link" onClick={handleLinkClick}>Community</a>
                    <a href="/founder-fellowship" className="nav-v2_menu-link w-nav-link" onClick={handleLinkClick}>Fellowship</a>
                    <a href="/companies" className="nav-v2_menu-link w-nav-link" onClick={handleLinkClick}>Companies</a>
                    <a href="/team" className="nav-v2_menu-link w-nav-link" onClick={handleLinkClick}>Team</a>
                    <a href="/events" className="nav-v2_menu-link w-nav-link" onClick={handleLinkClick}>Events</a>
                    <a href="/library" className="nav-v2_menu-link w-nav-link" onClick={handleLinkClick}>News</a>
                    <a href="/faq" className="nav-v2_menu-link faq-menu-link w-nav-link" onClick={handleLinkClick}>FAQ</a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <a href="https://minusone.com/" className="_1-button w-button" onClick={handleLinkClick}>-1</a>
          <a href="/apply" className="apply-button w-button" onClick={handleLinkClick}>Apply</a>
        </div>
      </div>
    </>
  )
}

export default Header
