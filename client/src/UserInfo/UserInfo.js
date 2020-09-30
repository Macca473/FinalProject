import React, { Component } from 'react';
import './Userinfo.css';
import itemthingy from '../itemthingy/itemthingy.js'

function plusminicon(boll) {
  if (boll == 1)
    {return '+'}
  else
    {return '-'}
}

function perscolor(boll) {
  if (boll == 1)
    {return 'textred'}
  else
    {return 'textgreen'}
}

function Items(itemsarr) {
  return (
    <div className="buyitem">
        <div className="buyimage">
            <img src={itemsarr.image} className="itemimage"></img>
              <div className="buyamount">
                <form>
                      <label className='labeltext'>
                      Quantity 
                      <input name="user_name" type="number" className='buyinput'/>
                      </label>
                </form>
              </div>
        </div>
        <div className="buyinfo">
            <div className="iteminfo">
                {itemsarr.name}
            </div>
            <div className="iteminfo">
                ${itemsarr.MODcost}
            </div>
            <div className="iteminfo" className={perscolor(`${itemsarr.costPer}`.slice(0, 1))}>
                {plusminicon(`${itemsarr.costPer}`.slice(0, 1))}
                {`${itemsarr.costPer}`.slice(2, 4)}%
            </div>
        </div>
    </div>
  )
}



function FetchUserinfo() {
  return fetch("/api/userinfo", {
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
  }

setInterval(FetchUserinfo, 1000);

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userinfo: {
                userinv: [
                  {
                    Amount: 0,    
                    name: '',
                    owner: '',
                    cost: 0.0,
                    MODcost: 0.0,
                    costPer: '0.00',
                    popularity: 0,
                    image: ''
                  }
                ]
            },
        }
      }

      timer() {
        FetchUserinfo()
        .then(json => {
            console.log("Fetch input: " + JSON.stringify(json));  
            // if(this.state.chathis.length !== json.message.length) { 
              console.log('userinfo updated');
              // json.message.reverse();
              this.setState({
                userinfo: json
              })
            // } 
          })
          .catch(err => {
            console.log(err);
        })
      }

      componentDidMount() {
        this.newMessageCheck = setInterval(this.timer.bind(this), 1000);
      }
  
      render() {
        const item = this.state.userinfo.userinv
        return (

          <div>
              <div className="itemscon">
            <div className="firstrow">
                {item.map(function(object, inx){
                    return <div> <Items key={inx} name={object.name} MODcost={object.MODcost} image={object.image} costPer={object.costPer}/> </div>
                })}
            </div>
          </div>
          </div>
        )
      }
}

export default UserInfo
