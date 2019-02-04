import React, { Component } from 'react'
import SignUp from '../SignUp/SignUp.js';
import url from '../../util/url.js'
import Unsplash from 'unsplash-js';
import Header from '../Header/Header.js';
import './landing.scss';



const unsplash = new Unsplash({
  applicationId: "{APP_ACCESS_KEY}",
  secret: "{APP_SECRET}",
  callbackUrl: "{CALLBACK_URL}"
});

export default class Landing extends Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);


    this.state = {
      data: [],
      isOpen: true,
    }
  }

  componentDidMount() {
    fetch(url.unsplashUrl)
      .then(resp => resp.json())
      .then(images => {
        this.setState({
          data: images,
        })
      })
      .catch(error => console.log(error))
  }

  closeModal = () => {
    this.setState({
      isOpen: false
    });
  };

   // tracks input for search bar
   handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  // changes state in searched - when searched
  handleSearch = (e) => {
    e.preventDefault();
    this.setState({
      searched: true
    });
  }

  // listener for enter key
  keyDown = (e) => {
    if (e.keyCode === 13) {
      this.handleSearch();
    }
  };

  render() {
    return (
      <div className='landing'>
        <SignUp handleClose={this.closeModal} Open={this.state.isOpen} />
        <Header />
      </div>
    )
  }
}
