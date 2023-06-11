import '../styles/streamlist.css'

const HomeData = ({ data }) => {
    return (
        <div className="stream-list">
            {data.items.map((el) => (
                <div className="stream-video-card" key={el.id.videoId}>
                    <div className="video-card-poster">
                        <a className='stream-video-link' href={`https://www.youtube.com/watch?v=${el.id.videoId}`}>
                            <img className="video-poster-img" src={el.snippet.thumbnails.medium.url} alt="" />
                            <div className="video-card-body">
                                {el.snippet.title}
                            </div>
                        </a>

                    </div>
                </div>
            ))}
        </div>
    );
}

export default HomeData;