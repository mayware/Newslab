import '../styles/home.css'
import useAxios from '../useAxios';
import HomeData from './HomeData';

const Home = () => {

    // AIzaSyAw1BY7lyYOCYWruxzNX_HjvJx_sxP48Uc

    const { data, error, loading } = useAxios('https://api.npoint.io/158e839ad0f4f057f869')

    return (
        <div className="content">
            <h1>Home page</h1>
            {data && <HomeData data={data} />}
        </div>
    );
}

export default Home;