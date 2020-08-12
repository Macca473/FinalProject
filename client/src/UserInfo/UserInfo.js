import React, { Component } from 'react';

// async function thisFetch() {
//   let output = {}
//   await setTimeout(function(){
//   return fetch("/api/userinfo", {
//     mode: 'cors',
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8'
//     },
//   })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//     output = data
//   });
// }, 2000)

// };

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userinfo: {
              userinv: [
                  {
                    amount: 0,
                    user: {
                      user_name: '',
                      balance: 0
                    },
                    item: {
                      item_name: '',
                      cost: 0,
                      popularity: 0,
                      idealtod: 0,
                      idealweather: 0,
                      idealtemp: 0,
                      item_image: ''
                    }
                  }
              ]
            },
        }
        this.Fetchuserinfo = this.Fetchuserinfo.bind(this);
        this.Fetchuserinfo()
      }

      Fetchuserinfo() {
        fetch("/api/userinfo", {
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          })
          .then(function(result){
            console.log(JSON.stringify(result))
          })
          // .then(json => {
            
            // this.setState({
            //   userinfo: json
            // })
          // })
      }

      // componentDidMount() {

      //   const request = async () => {
      //     const response = await fetch("/api/userinfo", {
      //           mode: 'cors',
      //             headers: {
      //               'Content-Type': 'application/json;charset=utf-8'
      //             },
      //           })
      //     const json = await response.json();
      //     console.log(json);
      //   }

      //   fetch("/api/userinfo", {
      //     mode: 'cors',
      //     headers: {
      //       'Content-Type': 'application/json;charset=utf-8'
      //     },
      //   })
      //   .then(function(result){
      //     console.log(result.all)
      //     // this.setState({
      //     //   userinfo: result
      //     // })
      //   });
      // }

      // componentDidUpdate(prevProps) {
      //   // Typical usage (don't forget to compare props):
      //   let newfetch = JSON.stringify(FetchData)
      //   console.log("updating")
      //   if (newfetch !== prevProps) {
      //     this.setstate({
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
            <p>{this.state.userinfo.userinv[0].amount}</p>
          </div>
        )
      }
}

export default UserInfo
