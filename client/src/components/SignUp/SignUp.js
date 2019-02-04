import React, { Component } from 'react'
import PinLogo from '../../assets/pinterest.svg';
import Github from '../../assets/github-icon.svg';
import './signup.scss'


export default class SignUp extends Component {

  constructor(props) {
    super(props);

    this.authWithGithub = this.authWithGithub.bind(this);
    this.authWithEmailPassword = this.authWithEmailPassword.bind(this);
  }

  authWithEmailPassword(e) {
    e.preventDefault();
    console.log('auth with email')
    console.table([{
      email: this.emailInput.value,
      password: this.passwordInput.value,
    }])
  }

  authWithGithub() {
    console.log('auth with github')
  }

  render() {
    return (
      <div style={{ ...flex, display: this.props.Open ? 'flex' : 'none' }}>
        <div className='modal-layer' onClick={this.props.handleClose} style={modalLayer}></div>
        <div className="form-container" style={formModal}>
          <form onSubmit={(e) => { this.authWithEmailPassword(e) }} ref={(form) => { this.loginForm = form }}>
            <img src={PinLogo} alt='pinterest logo' />
            <h1>Sign up to see more</h1>
            <h4>Access Pinterest's best ideas with a free account</h4>
            {/* usually the label would wrap the input but in order to hide the label like pinterest it's not */}
            <label className='visibility-hidden'>
              Email
            </label>
            <input
              name="email"
              type="email"
              /* this lets us grab the email input directly to get the value 
              so we can use when calling things inside of our functions
              */
              ref={(input) => { this.emailInput = input }}
              placeholder='Email'
            />
            <label className='visibility-hidden'>
              Password
            </label>
            <input
              name="password"
              type="password"
              ref={(input) => { this.passwordInput = input }}
              placeholder='Create a password'
            />
            <label className='visibility-hidden'>
              Age
            </label>
            <input
              name='name'
              type='number'
              placeholder='Age'
            />
            <button className='signup-btn' type="submit" onClick={this.props.handleClose}>Continue</button>
            <p>or</p>
            <button className='github-btn' onClick={() => { this.authWithGithub() }}>
              <img src={Github} alt='github icon' />
              Log in with GitHub
            </button>
            <button className='login-btn'>Log in</button>
          </form>
        </div>
      </div>
    );
  };
}


const flex = {
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
  zIndex: 20,
  overflow: 'hidden',
  backgroundColor: 'rgba(57,57,57,0.6)',
};

const modalLayer = {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  zIndex: 20,
  backgroundColor: 'transparent'
};

const formModal = {
  position: 'absolute',
  color: 'rgb(57,57,57)',
  boxShadow: 'rgba(0, 0, 0, 0.45) 0px 2px 10px',
  backgroundColor: '#FFFFFF',
  width: '420px',
  height: '578px',
  maxWidth: '100%',
  maxHeight: '100%',
  zIndex: 20,
  borderRadius: '8px',
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column'
};
