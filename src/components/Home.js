import { useState, useEffect } from 'react';
import useFetch from '../useFetch';
import Newslist from './Newslist';
import '../styles/home.css'

const Home = ({ resizeContent }) => {
    const apiKey = 'AIzaSyAw1BY7lyYOCYWruxzNX_HjvJx_sxP48Uc';
    const { data: news, isPending, error } = useFetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&type=channel&part=snippet&eventType=live&maxResults=5`);

    return (
        <div className={`home-content ${resizeContent ? 'show' : ''}`}>
            {/* {news && <Newslist news={news} />} */}
        </div>
    );
}

export default Home;