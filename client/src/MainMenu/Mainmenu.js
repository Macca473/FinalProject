import React from 'react';
import './Mainmenu.css';
import Userinfo from '../UserInfo/UserInfo.js'

function Mainmenu() {
  return (
    <div>
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap" rel="stylesheet"></link>

      <div className="background">
        <div className="mainmenu">
            <div className="mainmenugridpart">
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png'
              className="NavBar"
              />
            </div>
            <div className="mainmenugridpart">
              <div className="title">
                  C.O.S.E
              </div>
            </div>
            <div className="mainmenugridpart MobileNolikey">
                <div className="mainmenubuttons buffer">
                  <button className="titlebutton leftbutton shadow">
                    Store
                  </button>
                  <button className="titlebutton shadow">
                    Your items
                  </button>
                  <button className="titlebutton rightbutton shadow">
                    Add item
                  </button>
                </div>
            </div>
            <div className="mainmenugridpart">
                <div className="mainmenulogbuttons buffer">
                  <button className="titlebutton buttonmargin shadow">
                    User Info
                  </button>
                  <button className="titlebutton buttonmargin shadow">
                    Logout
                  </button>
                </div>
            </div>
        </div>
        <div>
            <Userinfo/>
        </div>
      </div>
    </div>
  );
}

export default Mainmenu;
