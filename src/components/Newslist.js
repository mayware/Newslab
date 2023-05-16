const Newslist = ({ news }) => {
    return (
        <div className="news-content">
            {/* <span className="news-track-title">Top recent news</span> */}
            <div className="news-track">
                {news.articles.map((nws, index) => (
                    <div className="news-entity" key={index}>
                        <div className="news-image">
                            <img className="news-img" src={nws.urlToImage} alt="" />
                        </div>
                        <div className="news-body">
                            <p className="news-title">{nws.title}</p>
                            <span className="news-publicsher">{nws.source.name}</span>
                            <span className="news-date">{nws.publishedAt}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Newslist;