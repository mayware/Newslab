const ExploreList = ({ output }) => {

    return (
        <div className="post-content">
            {output.map((out) => (
                <div className="out-card" key={out.id}>
                    <span className="post-response">{out.title}</span>
                </div>
            ))}
        </div>
    );
}

export default ExploreList;