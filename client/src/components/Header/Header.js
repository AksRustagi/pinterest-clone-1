import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import PinLogo from '../../assets/pinterest.svg';

export default class Header extends Component {
  render() {
    return (
      <div>
        <img src={PinLogo} alt='pinterest logo' />
        <SearchBar handleChange={this.handleChange} handleSearch={this.handleSearch} />

      </div>
    )
  }
}
