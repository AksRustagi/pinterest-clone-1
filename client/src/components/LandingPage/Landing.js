import React, { Component } from 'react'
import SignUp from '../SignUp/SignUp.js';
import url from '../../util/url.js'
import Unsplash from 'unsplash-js';
import SearchBar from '../Header/SearchBar.js';
import Results from '../Results/Results.js';
import './landing.scss';


const unsplash = new Unsplash({
  applicationId: process.env.REACT_APP_UNSPLASH_ACCESS,
  secret: process.env.REACT_APP_UNSPLASH_SECRET,
  // callbackUrl: "{CALLBACK_URL}"
});

export default class Landing extends Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.keyDown = this.keyDown.bind(this);



    this.state = {
      images: [],
      isOpen: true,
      keyword: '',
      searched: false,
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
      .catch(error => console.log('error during fetch!', error))
  }

  componentDidUpdate() {
    const { keyword, searched } = this.state;

    if ((keyword.length === 0) & searched) {
      this.setState({
        searched: false
      });
    }
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

    const { data, keyword, searched } = this.state;

    // const filtered = data.filter(items =>
    //   items.keywords.toLowerCase().includes(keyword && keyword.toLowerCase())
    // );

    return (

      <div keyDown={(e) => this.keyDown(e)}>
        <SignUp handleClose={this.closeModal} Open={this.state.isOpen} />
        <SearchBar handleChange={this.handleChange} handleSearch={this.handleSearch}/>
        <Results data={this.state.images} />
      </div>
    )
  }
}
