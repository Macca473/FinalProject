import React, { Component } from 'react';
import './UserLogin.css';
import UserInfo from '../UserInfo/UserInfo.js'

function POSTFetch(data) {
      return fetch('/api/login', {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data),
      })
      .catch((error) => {
        console.error('Error:', error);
      })
};

class usersAPI extends Component {
          constructor(props) {
            super(props);
            this.state = {          
              // user: {
              //     user_name: '',
              //     user_password: 0,
              //     isLoggedIn: false}
              isLoggedIn: false
          }
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        }

      handleSubmit = (event) => {
      //   alert('A name was submitted: ' + this.state.username);
        event.preventDefault();

        let inputarr = event.target.getElementsByTagName('input');

        let newuser = {};

        for (var eachinp = 0; eachinp < inputarr.length - 1; eachinp++) {
          let val = inputarr[eachinp].value;
          let nam = inputarr[eachinp].name;
          console.log(inputarr[eachinp].name + " " + inputarr[eachinp].value)
          newuser[nam] = val;
        }

        // let newuserjson = newuser.json();

        console.log(JSON.stringify(newuser));

          POSTFetch(newuser).then(function(result){
              console.log('result ', result)
            }).then(
              this.setState({
                ...this.state,
                isLoggedIn: true
              })
            )
      }
      render() {

          const isLoggedIn = this.state.isLoggedIn;
          if (isLoggedIn) {
            return <UserInfo/>;
          }
            return (
              <div>
                      <form onSubmit={this.handleSubmit}>
                        <div className='Labwrap'>
                          <label className='labeltext'>
                          Name:
                          <input name="user_name" type="text" className='searchinput'/>
                          </label>
                        </div>
                        <div className='Labwrap'>
                          <label className='labeltext'>
                          Password:
                          <input name="user_password" type="number" className='searchinput'/>
                          </label>
                        </div>
                        <input type="submit" value="Login" className='Buttons'/>
                    </form>
              </div>
            )
      }
}

export default usersAPI
