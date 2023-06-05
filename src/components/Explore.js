import useAxios from "../useAxios";
import ExploreList from "./ExploreList";

const Explore = ({ resizeContent }) => {

    const { data, loading, error } = useAxios('https://jsonplaceholder.typicode.com/posts');

    return (
        <div className={`content ${resizeContent ? 'show' : ''}`}>
            <h1>Explore page</h1>
            {loading && <div>Loading...</div>}
            {error && <div>Error</div>}
            {data && <ExploreList output={data} />}
        </div>
    );
}

export default Explore;