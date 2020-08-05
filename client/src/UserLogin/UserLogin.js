import React, { Component } from 'react';

import UserInfo from '../UserInfo/UserInfo.js'

async function POSTFetch(data) {
  let validate = false;
  console.log("Data:" + JSON.stringify(data));
  while (validate === false) {
    await fetch('/api/login', {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data => {
      console.log('Success:', data);
      validate = true
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    if (validate === true) {
      console.log("validate is true");
      return true
    }
  }
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
        // this.handleChange = this.handleChange.bind(this);
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

        // console.log(POSTFetch(newuser))
        
        let postcheck = POSTFetch(newuser);

        console.log("postcheck: " + postcheck);

        this.setState({
          isLoggedIn: postcheck
        })       
      }

      render() {

          const isLoggedIn = this.state.isLoggedIn;
          if (isLoggedIn) {

            return <UserInfo />;
          }
            return (
              <div>
                      <form onSubmit={this.handleSubmit}>
                        <label>
                        Name:
                        <input
                            name="user_name"
                            type="text"
                        />
                        </label>
                    <br />
                        <label>
                        Password:
                        <input
                            name="user_password"
                            type="number"
                        />
                        </label>
                        <input type="submit" value="Login" />
                    </form>
              </div>
            )
      }
}

export default usersAPI
