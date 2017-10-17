import React, { Component } from 'react';
import axios from 'axios';
import randomNumber from 'random-number';

import './App.css';
import Display from './display';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardArray: [],
      displayCards: [],
    }
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'http://www.clashapi.xyz/api/random-deck',
    })
      .then(res => {
        console.log(res);
        this.setState({cardArray: res.data});
      })
  }

  render() {
    const { cardArray } = this.state;
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        {typeof cardArray !== 'undefined' &&
          <div>
            <Display
              cardArray={cardArray}
            />
          </div>
        }
      </div>
    );
  }
}

export default App;
