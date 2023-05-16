const Newslist = ({ news }) => {
    return (
        <div className="news-content">
            <div className="news-track">
                {news.articles.map((nws, index) => (
                    <div className="news-entity" key={index}>
                        <div className="news-image">
                            <img className="news-img" src={nws.urlToImage} alt="" />
                        </div>
                        <div className="news-body">
                            <p className="news-title">{nws.title}</p>
                            <p className="news-date">{nws.publishedAt}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Newslist;