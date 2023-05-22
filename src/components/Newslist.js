import '../styles/news.css'


const Newslist = ({ news }) => {

    return (
        <div className="news-content">
            {/* <div className="news-track-title">
                <span className='news-track-title-text'>Trending news</span>
            </div> */}
            <div className="news-section">
                {news.articles.map((nws, index) => (
                    <div className="news-block" key={index}>
                        <div className="news-image">
                            <a href={nws.url} target='_blank'>
                                <img className="news-img" src={nws.urlToImage} alt="news-image" />
                            </a>
                        </div>
                        <div className="news-body">
                            <p className="news-title">{nws.title}</p>
                            <span className="news-publicsher">{nws.source.name}</span>
                            {/* <span className="news-date">{nws.publishedAt.split("T")[0]}</span> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Newslist;