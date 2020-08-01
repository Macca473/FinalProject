import React from 'react';

    class NewUser extends React.Component {
        constructor(props) {
          super(props);
          this.state = {username: '',
                        password: null};
      
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
      
        // handleChange(event) {
        //   this.setState({name: event.target.name,
        //                 password: event.target.password});

        //   this.setState({password: event.target.password});

        handleChange = (event) => {
            let nam = event.target.name;
            let val = event.target.value;
            this.setState({[nam]: val});
          }
      
        handleSubmit = (event) => {
        //   alert('A name was submitted: ' + this.state.username);
            event.preventDefault();
            fetch('http://localhost:3000/', {
                method: 'POST',
                mode: 'cors',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({body:this.state})
            })
            .then(res => res.json())
            .then((data) =>  console.log(data))
            .catch((err)=> console.log(err))
        }

        render() {
          return (
                <div>
                <h1>{this.state.username} {this.state.password}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Username:
                    <input
                        name="username"
                        type="text"
                        // name={this.state.value}
                        onChange={this.handleChange} />
                    </label>
                <br />
                    <label>
                    Password:
                    <input
                        name="password"
                        type="text"
                        // password={this.state.value}
                        onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                </div>
                );
                }
      }

export default NewUser;
