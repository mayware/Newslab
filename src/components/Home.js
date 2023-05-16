import { useState, useEffect } from 'react';
import useFetch from '../useFetch';
import Newslist from './Newslist';
import '../styles/home.css'

const Home = ({ resizeContent }) => {
    const { data: news, isPending, error } = useFetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=e8b5910d0c7b4295a518c1d72fc16dfd');

    return (
        <div className={`content ${resizeContent ? 'show' : ''}`}>
            <h1>Home screen</h1>
            <span>Here the user will see his recommendations and explored news</span>
            {news && <Newslist news={news} />}
        </div>
    );
}

export default Home;