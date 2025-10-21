import './NewsEvents.css'

const NewsEvents = () => {
  const articles = [
    {
      title: 'Recapping SPC India Demo Faire Summer 2025',
      image: 'https://cdn.prod.website-files.com/61d62b22d4c42f26e3842ad1/68a2c50e561c8034664086ee_IndiaDemoFaire---Summer-2025.jpeg',
      link: 'https://blog.southparkcommons.com/recapping-india-demo-faire-summer-2025/',
      tag: 'Article'
    },
    {
      title: 'Recapping SPC Summer 2025 Demo Faire',
      image: 'https://cdn.prod.website-files.com/61d62b22d4c42f26e3842ad1/68a2c50e561c8034664086d5_SPC_Demo-Faire--1920-x-1080-px-.jpeg',
      link: 'https://blog.southparkcommons.com/recapping-spc-summer-2025-demo-faire/',
      tag: 'Article'
    },
    {
      title: 'The Case for Talent Density in -1 to 0',
      image: 'https://cdn.prod.website-files.com/61d62b22d4c42f26e3842ad1/68a2c50ce119e71663be7078_WhatsApp-Image-2025-01-27-at-11.47.39-1.jpeg',
      link: 'https://blog.southparkcommons.com/case-for-talent-density-minus-one/',
      tag: 'Article',
      author: 'Gopal Raman'
    }
  ]

  return (
    <div className="container container-separated last w-container">
      <div className="mobile-separator"></div>
      <div className="section-title-block short">
        <h4 className="section-title">NEWS AND EVENTS</h4>
      </div>
      <div className="div-block-63">
        <div className="collection-list-wrapper-11">
          <div className="collection-list-12">
            {articles.map((article, index) => (
              <div key={index} className="article-item">
                <a href={article.link} target="_blank" rel="noopener noreferrer" className="home-library-card">
                  <img src={article.image} loading="lazy" width="Auto" alt={article.title} />
                  <div className="home-library-card-title">{article.title}</div>
                </a>
                <div className="div-block-40">
                  <div className="library-tag">{article.tag}</div>
                  {article.author && (
                    <div className="code-embed-2">
                      <a className="library-tag author-tag" href={`/library?author=${encodeURIComponent(article.author)}#articles`}>
                        {article.author}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsEvents

