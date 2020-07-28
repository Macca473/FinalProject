import React, { Component } from 'react';
import './App.css';
import API from './API.js';

  class App extends Component {
    render() {
      return (
        <div>
          {/* {API.state.map((booklist, index) => (
            <p> {booklist.title} </p>
          ))} */}
          <API />
        </div>
      )
    }
  }

export default App;
