import React, { Component } from 'react';

// function Getuserinfo() {
//   let getfetch = fetch("/api/login", {
//     mode: 'no-cors',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//     .then(res => res.json())
//     .then(json => {
//       this.setState = ({
//         color: 'green'
//   });
//   return getfetch
// })

// }

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'old color'
          }
      
      this.Getuserinfo = this.Getuserinfo.bind(this)
    }

      Getuserinfo() {
        fetch("/api/login", {
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(json => {
            this.setState = ({
              color: 'green'
         });
         console.log("Fetching: " + JSON.stringify(json))
      })
      }

      componentDidMount() {
        console.log('Mounting')
        this.Getuserinfo()
      }


      // componentDidUpdate(prevProps) {
      //   // Typical usage (don't forget to compare props):
      //   let newfetch = JSON.stringify(FetchData)
      //   console.log("updating")
      //   if (newfetch !== prevProps) {
      //     this.setstate = ({
      //       userinfo: newfetch
      //     })
      //   }
      // }

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
  
      render() {

        return (

          <div>
            <p>test</p>
            <p>{this.state.color}</p>
          </div>
        )
      }
}

export default UserInfo
