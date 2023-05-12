import { useState, useEffect } from 'react';
import useFetch from '../useFetch';
import '../styles/home.css'

const Home = () => {
    return (
        <div className="content">
            <h1>Home screen</h1>
            <span>Here the user will see his recommendations and explored news</span>
        </div>
    );
}

export default Home;