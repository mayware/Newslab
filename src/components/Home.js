import '../styles/home.css'
import useAxios from '../useAxios';
import HomeData from './HomeData';

const Home = () => {

    const apiKey = 'AIzaSyAw1BY7lyYOCYWruxzNX_HjvJx_sxP48Uc';

    const { data, error, loading } = useAxios(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&type=video&part=snippet&eventType=live&q=@NBCNews&maxResults=21`)

    return (
        <div className="content">
            {data && <HomeData data={data} />}
        </div>
    );
}

export default Home;