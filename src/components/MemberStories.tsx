import { useState } from 'react'
import './MemberStories.css'

const MemberStories = () => {
  const [activeStory, setActiveStory] = useState(0)
  
  const stories = [
    {
      name: 'Anurag',
      headline: 'How did Anurag Goel turn side-projects into a company?',
      story: 'A graduate of IIT in India and employee #8 at Stripe, Anurag joined SPC knowing only that he wanted to take on big problems. He built apps around healthcare, deep learning, and real-time communication, while helping other members with their projects. All this building and feedback revealed the opportunity for a new platform that could radically simplify DevOps. Render was born and subsequently has become one of the fastest growing tools in the developer ecosystem, raising $150M+ to date.',
      company: 'Render',
      companyLink: '/companies/render',
      image: 'https://cdn.prod.website-files.com/61d62b22d4c42f26e3842ad1/620961d9185e7a75f35f4649_Anurag%20Goel-Resize-test.png'
    },
    {
      name: 'Amit',
      headline: 'Building the foundation for a multi-modal future, starting with 3D.',
      story: 'Amit joined SPC in 2021 after working on cutting-edge camera tech at Apple, driven by a fascination with NeRFs, a new way to turn photos into rich 3D models. As he explored the frontier, he saw a bigger shift coming—the world is multi-modal, and AI will be too. That insight sparked Luma, where he\'s built state-of-the-art image, 3D, and video models powering a new generation of immersive, AI-native content. The company has since raised $150M+ to bring this vision to life.',
      company: 'Luma',
      companyLink: '/companies/luma',
      image: 'https://cdn.prod.website-files.com/61d62b22d4c42f26e3842ad1/67ed75ccccf7ab667c4ae21c_SPC-2025Portraits-Amit-Solo-Final-min.png'
    },
    {
      name: 'Waseem & Jeff',
      headline: 'Two founding members went on to start the first SPC unicorn.',
      story: 'Both engineers from MIT, Waseem and Jeff co-founded two companies together that were successfully acquired before they helped found SPC. They were instrumental in building the culture and ethos of the community. This dynamic duo left SPC to start Pilot, the first company founded out of SPC to reach a unicorn ($1B+) valuation.',
      company: 'Pilot',
      companyLink: '/companies/pilot',
      image: 'https://cdn.prod.website-files.com/61d62b22d4c42f26e3842ad1/67ed77374757789589126b17_SPC-2025Portraits-Waseem%26Jeff-Pair-Final-min-min%202.png'
    }
  ]

  return (
    <div className="member-stories-section scrollbar-hidden">
      <div className="container w-container">
        <div className="tablet-separator"></div>
        <div className="section-title-block">
          <h4 className="section-title">Member Stories</h4>
        </div>
        <div className="members-block">
          <div className="member-card-navigator scrollbar-hidden">
            <div className="member-list-collection-wrapper">
              <div className="member-name-collection-list">
                {stories.map((story, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className={`secondary-heading member-name-nav ${activeStory === index ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault()
                      setActiveStory(index)
                    }}
                  >
                    {story.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="w-layout-grid member-cards-container hide-scrollbar-cards">
            <div className="member-card-collection-list-wrapper scrollbar-hidden">
              <div className="member-card-collection-list scrollbar-hidden">
                <div className="member-card-collection-item scrollbar-hidden">
                  <div className="member-story-card story-card">
                    <img 
                      className="member-photo member-stories-photo member-image" 
                      src={stories[activeStory].image}
                      width="255" 
                      height="" 
                      alt={stories[activeStory].name}
                      loading="lazy"
                    />
                    <div className="member-story-content-block member-main-block">
                      <div>
                        <h5 className="eyebrow-header member-name-mobile">{stories[activeStory].name}</h5>
                        <h2 className="secondary-heading member-story-headline">{stories[activeStory].headline}</h2>
                        <p className="paragraph member-story">{stories[activeStory].story}</p>
                      </div>
                      {stories[activeStory].company && (
                        <a href={stories[activeStory].companyLink} className="link-block-10">
                          <div className="text-block-26">More About</div>
                          <div className="text-block-26">{stories[activeStory].company}</div>
                          <div className="text-block-26-copy">LEARN MORE</div>
                          <div className="svg-arrow-icon">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0 14L28 14" stroke="CurrentColor"></path>
                              <path d="M14 0.5L28 14" stroke="CurrentColor"></path>
                              <path d="M14 28L28 14" stroke="CurrentColor"></path>
                            </svg>
                          </div>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-paging-block">
            <div className="paging-label">1/{stories.length}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemberStories

