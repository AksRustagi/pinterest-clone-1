import React, { Component } from 'react'
import SignUp from '../SignUp/SignUp.js';
import url from '../../util/url.js'
import Unsplash from 'unsplash-js';
import './landing.scss';



const unsplash = new Unsplash({
  applicationId: "{APP_ACCESS_KEY}",
  secret: "{APP_SECRET}",
  callbackUrl: "{CALLBACK_URL}"
});

export default class Landing extends Component {

  constructor(props) {
    super(props)
    
    
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

  render() {
    return (
      <div className='landing'>
        <SignUp handleClose={this.closeModal} Open={this.state.isOpen}/>
      </div>
    )
  }
}
