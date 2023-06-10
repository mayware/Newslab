const HomeData = ({ data }) => {
    return (
        <>
            {data.map((el) => (
                <div className="posts" key={el.id}>
                    {el.price}
                    {el.description.slice(2, 15)}
                    <img className="post-image" src={el.image} alt="" />
                </div>
            ))}
        </>
    );
}

export default HomeData;