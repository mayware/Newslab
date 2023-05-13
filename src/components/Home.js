import { useState, useEffect } from 'react';
import useFetch from '../useFetch';
import '../styles/home.css'

const Home = ({ resizeContent }) => {
    return (
        <div className={`content ${resizeContent ? 'show' : ''}`}>
            <h1>Home screen</h1>
            <span>Here the user will see his recommendations and explored news</span>
        </div>
    );
}

export default Home;