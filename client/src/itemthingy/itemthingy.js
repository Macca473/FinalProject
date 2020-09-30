import React, { Component } from 'react';
import './itemthingy.css'

class itemthingy extends Component {
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
      }

    render() {
        return (
        <div className="buyitem">
            <div className="buyimage">
                <img src="https://kandurataumbrella.lk/images/products/139.jpg" className="itemimage"></img>
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
                    Umbrella:
                </div>
                <div className="iteminfo">
                    $15.99
                </div>
                <div className="iteminfo textgreen">
                    -10%
                </div>
            </div>
        </div>
        )
    }  
}

export default itemthingy