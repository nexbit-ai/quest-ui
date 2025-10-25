import './PathsSPC.css'

const PathsSPC = () => {
  
  const cards = [
    {
      title: 'Community',
      description: 'A home for people looking for open-ended exploration, learning, idea testing, and relationship-building. If you \'re actively exploring what to do next, we \'d love to meet you.',
      link: '/community'
    },
    {
      title: 'Fellowship',
      description: 'Founder Fellowship: A structured, guided path through the -1 to 0 phase for anyone committed to starting a venture-scale company but still navigating ideation. Up to $1M investment, 1:1 partner mentorship, small cohorts, and no set deadlines or demo days.',
      link: '/founder-fellowship'
    },
    {
      title: 'Funding',
      description: 'The SPC Fund also works with select entrepreneurs who are not part of the community. We partner with founders primarily in the pre-seed or seed stage, leveraging our operational expertise and the broader community to help you achieve your vision.',
      link: '/companies'
    }
  ]

  return (
    <div id="container-separated" className="container container-separated paths-spc w-container">
      <div className="mobile-separator"></div>
      <div className="section-title-block">
        <h4 className="section-title">PATHS THROUGH SPC</h4>
      </div>
      <div className="cards-block scrollable-cards-block">
        <div className="w-layout-grid cards-container pathways hide-scrollbar-cards">
          {cards.map((card, index) => (
            <div key={index} className="card">
              <div>
                <h2 className="card-heading">{card.title}</h2>
                <div className="card-text-container">
                  <div className="caption">{card.description}</div>
                </div>
              </div>
              <div className="button-primary">
                <a href={card.link} className="button-link-block">
                  <div className="text-block">Learn More</div>
                  <div className="svg-arrow-icon">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 14L28 14" stroke="CurrentColor"></path>
                      <path d="M14 0.5L28 14" stroke="CurrentColor"></path>
                      <path d="M14 28L28 14" stroke="CurrentColor"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="card-paging-block pathways">
          <div className="paging-label">1/3</div>
        </div>
      </div>
    </div>
  )
}

export default PathsSPC

