const ExploreList = ({ output }) => {

    return (
        <>
            {output.map((out) => (
                <div className="out-card" key={out.id}>
                    <span className="post-response">{out.title}</span>
                </div>
            ))}
        </>
    );
}

export default ExploreList;