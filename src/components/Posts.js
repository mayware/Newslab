import '../styles/posts.css'
import { useState } from 'react';
import Select from 'react-select';


const Posts = () => {

    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];

    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelectChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };


    return (
        <div className="posts-content">
            <div className="posts-title">Popular posts</div>
            <div className="posts-control-panel">
                <div className="filter-button-group">
                    <div className="left-filter-buttons">
                        <button className="filter-posts-btn">Ranked</button>
                        <button className="filter-posts-btn">Latest</button>
                    </div>
                    <div className="right-filter-buttons">
                        <Select
                            options={options}
                            value={selectedOption}
                            onChange={handleSelectChange}
                        />

                    </div>
                </div>
            </div>
            <div className="posts-results"></div>
        </div>
    );
}

export default Posts;