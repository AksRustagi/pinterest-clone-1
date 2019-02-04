import React from 'react';
import PinLogo from '../../assets/pinterest.svg';
import './header.scss';



const SearchBar = ({ keyword, handleChange }) => (

    <div className='header-container'>
        <img src={PinLogo} alt='pinterest logo' />
        <div className='search-container'>
            <input
                type='search'
                name='keyword'
                placeholder='Search'
                value={keyword}
                onChange={(e) => handleChange(e)}
            />
        </div>
    </div>
);

export default SearchBar;

