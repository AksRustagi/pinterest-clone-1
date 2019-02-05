import React, { Component } from 'react';
import axios from 'axios';

import SignUp from '../SignUp/SignUp.js';
import url from '../../util/url.js'
import Unsplash from 'unsplash-js';
import SearchBar from '../Header/SearchBar.js';
import Results from '../Results/Results.js';
import './landing.scss';


const unsplash = new Unsplash({
  applicationId: process.env.REACT_APP_UNSPLASH_ACCESS,
  secret: process.env.REACT_APP_UNSPLASH_SECRET,
});

export default class Landing extends Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.keyDown = this.keyDown.bind(this);



    this.state = {
      images: [],
      isOpen: true,
      loading: true,
    }
  }

  componentDidMount() {
    fetch(url.unsplashUrl)
      .then(resp => resp.json())
      .then(data => {
        console.log(data[4].urls.regular)
        this.setState({
          images: data,
        })
      })
      .catch(error => console.log('Error during fetch!', error))
  }

  componentDidUpdate(prevState) {
    if (this.state.data !== prevState.data) {
      this.performSearch();
    }
  }

  performSearch = (query = 'dogs') => {
		axios
			.get(`https://api.unsplash.com/search/photos/?page=1&per_page=100&query=${query}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS}`)
			.then(data => {
				this.setState({ 
          images: data.data.results, 
          loading: false 
        });
			})
			.catch(err => {
				console.log('Error during fetching!', err);
			});
	};

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

  // listener for enter key
  keyDown = (e) => {
    if (e.keyCode === 13) {
      this.performSearch();
    }
  };

  render() {

    return (

      <div keyDown={(e) => this.keyDown(e)}>
        <SignUp handleClose={this.closeModal} Open={this.state.isOpen} />
        <SearchBar onSearch={this.performSearch}/>
        {this.state.loading
        ? <p>Loading...</p>
        : <Results data={this.state.images} />
        }
      </div>
    )
  }
}
