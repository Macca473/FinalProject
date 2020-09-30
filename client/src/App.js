import React, { Component } from 'react';
import './App.css';
import Login from './UserLogin/UserLogin.js';
import NewUser from './NewUser/NewUser.js';


  class App extends Component {
    constructor(props) {
      super(props);
      // this.handleLoginClick = this.handleLoginClick.bind(this);
      // this.handleNewUserClick = this.handleNewUserClick.bind(this);
      this.state = {redirectoption: 0};
    }
    
    NewAccountClick = (event) => {
      event.preventDefault();
      this.setState({redirectoption: 1});
    }

    LoginClick = (event) => {
      event.preventDefault();
      this.setState({redirectoption: 2});
    }
      
    render() {
      const redirectoption = this.state.redirectoption;
      
      if (redirectoption === 0) {
          return (
            <div className='background'>
              <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo+Narrow:wght@700&display=swap"></link>
              <div className='outline'>
                <button onClick={this.NewAccountClick} className='Buttons'>
                  New Account
                </button>
                <button onClick={this.LoginClick} className='Buttons'>
                  Login
                </button>
              </div>
            </div>
          )
      } else if (redirectoption === 1){
          return (
          
          <div className='background'>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo+Narrow:wght@700&display=swap"></link>
                <NewUser/>
          </div>
          )
      } else if (redirectoption === 2){
          return (
          <div className='background'>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo+Narrow:wght@700&display=swap"></link>
                <Login/>
          </div>
          )
      }
    }
  }

export default App;
