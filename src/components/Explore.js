import useAxios from "../useAxios";
import ExploreList from "./ExploreList";

const Explore = () => {

    const { data, loading, error } = useAxios('https://jsonplaceholder.typicode.com/posts');

    return (
        <div className="content">
            <h1 className="page-title">Explore page</h1>
            {loading && <div>Loading...</div>}
            {error && <div>Error</div>}
            {data && <ExploreList output={data} />}
        </div>
    );
}

export default Explore;