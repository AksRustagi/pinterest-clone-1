import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import SignUp from '../SignUp/SignUp.js';

import PinLogo from '../../assets/pinterest.svg';
import './search.scss';

export default class SearchBar extends Component {
    state = {
        searchInput: '',
        isOpen: false,
    };

    onSearchChange = e => {
      this.setState({ searchInput: e.target.value })
    };

    handleSubmit = e => {
     e.preventDefault();
     this.props.onSearch(this.query.value);
     e.currentTarget.reset();
    };

    closeModal = () => {
      this.setState({ isOpen: false })
    };

    showModal = () => {
      this.setState({ isOpen: true })
    };

    render() {
        return (
            <div className='header-container'>
                <SignUp handleClose={this.closeModal} Open={this.state.isOpen} />
                <img src={PinLogo} alt='pinterest logo' />
                <form className='search-container' onSubmit={this.handleSubmit}>
                    <label className='visibility-hidden' htmlFor='search'>Search</label>
                    <input
                        type='search'
                        onChange={this.onSearchChange}
                        ref={input => (this.query = input)}
                        name='search'
                        placeholder='Search'
                    />
                    <button type='submit' id='submit' className='search-btn'>
                        Search
                    </button>
                </form>
                <div className='controlls'>
                    <button className='login-btn' onClick={this.showModal}>Log In</button>              
                    <Link to='/logout' aria-label='Log Out'>
                        <button className='logout-btn'>Log Out</button> 
                    </Link>
                </div>
            </div>
        );
    }
}

