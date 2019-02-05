import React, { Component } from 'react';
import PinLogo from '../../assets/pinterest.svg';
import './header.scss';

export default class SearchBar extends Component {
    state = {
        searchText: ''
    };

    onSearchChange = e => {
        this.setState({ searchText: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        e.currentTarget.reset();
    };

    render() {
        return (
            <div className='header-container'>
                <img src={PinLogo} alt='pinterest logo' />
                <form className="search-container" onSubmit={this.handleSubmit}>
                    <label className="visibility-hidden" htmlFor="search">Search</label>
                    <input
                        type="search"
                        onChange={this.onSearchChange}
                        name="search"
                        placeholder="Search"
                    />
                    <button type="submit" id="submit" className="search-button">
                        Search
                    </button>
                </form>
            </div>
        );
    }
}

