const HomeData = ({ data }) => {
    return (
        <div className="stream-list">
            {data.items.map((el) => (
                <div className="stream-video-card" key={el.id.videoId}>
                    <a href={`https://www.youtube.com/watch?v=${el.id.videoId}`}>
                        <img src={el.snippet.thumbnails.medium.url} alt="" />
                    </a>
                </div>
            ))}
        </div>
    );
}

export default HomeData;