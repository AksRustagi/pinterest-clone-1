import React from 'react';
import Mag from '../../assets/searchSvg.js';

const SearchBar = ({ keyword, handleSearch, handleChange }) => (

    <div className='search-container'>
        <input 
        type='search' 
        name='keyword' 
        placeholder='Search' 
        value={keyword} 
        onChange={(e) => handleChange(e)}
        />
        <button aria-label='search' onClick={(e) => handleSearch(e)}>
            <Mag />
        </button>
    </div>
);

export default SearchBar;
