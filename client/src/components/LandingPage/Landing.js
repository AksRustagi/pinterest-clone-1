import React, { Component } from 'react'
import SignUp from '../SignUp/SignUp.js';
import './landing.scss';

export default class Landing extends Component {

  state = {
    isOpen: true,
  }

  closeModal = () => {
    this.setState({
      isOpen: false
    });
  };

  render() {
    return (
      <div className='landing'>
        <h1>Welcome to the Landing page</h1>
        <SignUp handleClose={this.closeModal} Open={this.state.isOpen}/>
      </div>
    )
  }
}
