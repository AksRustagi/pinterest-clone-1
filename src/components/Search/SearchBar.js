import React, { Component } from 'react';
import PinLogo from '../../assets/pinterest.svg';
import './search.scss';

export default class SearchBar extends Component {
    state = {
        searchInput: '',
    };

    onSearchChange = e => {
        this.setState({ 
            searchInput: e.target.value 
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSearch(this.query.value);
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
                        ref={input => (this.query = input)}
                        name="search"
                        placeholder="Search"
                    />
                    <button type="submit" id="submit" className="search-btn">
                        Search
                    </button>
                </form>
            </div>
        );
    }
}

