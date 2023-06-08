const Saved = ({ resizeContent }) => {
    return (
        <div className={`content ${resizeContent ? 'show' : ''}`}>
            <h1>Watchlist page</h1>
        </div>
    );
}

export default Saved;