import React, { Component } from 'react';
import './NewUser.css'
class usersAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
          users: [{
                  user_name: '',
                  user_password: 0,
                  balance: 0,
          }]


        }
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidMount() {
        fetch("/api/login", {
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(json => {
            console.log("Fetch input: " + JSON.stringify(json));
            // const result = res.json();
            this.setState({
              users: json.users
            });
          })
          .catch(err => {
            console.log(err);
          })
        }

      // handleChange = (event) => {
      //   let nam = event.target.name;
      //   let val = event.target.value;
      //   let newuser = `${[nam]}: ${val}`;
      //   // return newuser;
      //   // this.setState({
      //   //   tmpbook: [
      //   //       ...this.state,
      //   //       newuser
      //   //   ]
      //   // });
      //   console.log(newuser)
      // }
  
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

        POSTFetch(newuser);

      //   this.setState({
      //     users: [
      //         ...this.state.users,
      //         newuser
      //     ]
      //   })
        
      function POSTFetch(data) {
            console.log("Data:" + JSON.stringify(data));
            fetch('/api/newuser', {
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
            })
            .catch((error) => {
              console.error('Error:', error);
            });
          };
      }

      render() {
        const items = this.state.users;
        // console.log("state = " + JSON.stringify(this.state))
        
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
                        <input type="submit" value="Create Account" className='Buttons'/>
                    </form>
          </div>
        )
      }
}

export default usersAPI
