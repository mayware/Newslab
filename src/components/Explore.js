import Categories from "./Categories";

const Explore = ({ resizeContent }) => {
    return (
        <div className={`content ${resizeContent ? 'show' : ''}`}>
            <h1>Explore page</h1>
            <Categories />
        </div>
    );
}

export default Explore;