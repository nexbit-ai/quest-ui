import './OurApproach.css'

const OurApproach = () => {
  return (
    <div className="container container-separated contaciner-home-approach w-container">
      <div className="mobile-separator"></div>
      <div className="div-block-71">
        <div>
          <div className="section-title-block short">
            <h4 className="section-title">OUR APPROACH</h4>
          </div>
          <div className="section-heading-container">
            <h2 className="secondary-heading">Why join SPC?</h2>
          </div>
          <div className="w-layout-grid philosopy-grid grid-copy">
            <div>
              <div className="philosophy-title">
                <strong>-1 to 0 is critical</strong>
              </div>
              <p className="philosophy-paragraph">
                What you work on matters. Take "figuring it out" as seriously as building whatever it turns out to be.
              </p>
            </div>
            <div>
              <div className="philosophy-title">
                <strong>Ideation is hard</strong>
              </div>
              <p className="philosophy-paragraph">
                It's easy to get stuck in local maxima, especially alone. We help you find your global maximum.
              </p>
            </div>
            <div>
              <div className="philosophy-title">
                <strong>Talent density is key</strong>
              </div>
              <p className="philosophy-paragraph">
                You are more likely to find something worth building when surrounded by the most talented people doing the same.
              </p>
            </div>
          </div>
        </div>
        <div className="div-block-72">
          <img 
            src="https://cdn.prod.website-files.com/61a9199ab7d2ceca0a392145/620986e9ad7c1b7dcc4a1662_community1.jpg" 
            loading="lazy" 
            alt="SPC Community" 
            className="image-17"
          />
        </div>
      </div>
    </div>
  )
}

export default OurApproach

