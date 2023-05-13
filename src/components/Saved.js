const Saved = ({ resizeContent }) => {
    return (
        <div className={`content ${resizeContent ? 'show' : ''}`}>
            <h1>Saved news page</h1>
        </div>
    );
}

export default Saved;