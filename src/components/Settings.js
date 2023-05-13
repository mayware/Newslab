const Settings = ({ resizeContent }) => {
    return (
        <div className={`content ${resizeContent ? 'show' : ''}`}>
            <h1>Settings page</h1>
        </div>
    );
}

export default Settings;