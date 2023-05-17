import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Newslist = ({ news }) => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="main-content">
            <div className="news-section">
                <div className="news-track-title">
                    <span className='news-track-title-text'>Trending news</span>
                </div>
                <Carousel
                    swipeable={false}
                    draggable={true}
                    showDots={false}
                    infinite={false}
                    responsive={responsive} containerClass='carousel-container'>
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
                </Carousel>
            </div>
        </div>
    );
}

export default Newslist;