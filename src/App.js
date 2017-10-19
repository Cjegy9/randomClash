import React, { Component } from 'react';
import axios from 'axios';
import randomNumber from 'random-number';

import './App.css';
import Display from './display';
import Header from './Header';

import {Button} from 'semantic-ui-react'

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
    }).then(res => {
        this.setState({cardArray: res.data});
    })
  }

  newDeck() {
    axios({
      method: 'get',
      url: 'http://www.clashapi.xyz/api/random-deck',
    }).then(res => {
      this.setState({cardArray: res.data});
    })
  }

  render() {
    const { cardArray } = this.state;
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{marginBottom: 16}}>
          <Header/>
        </div>
        <div>
          <Button
            color='blue'
            onClick={() => this.newDeck()}>
            Generate New Deck
          </Button>
        </div>
        {typeof cardArray !== 'undefined' &&
          <div style={{marginTop: 16}}>
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
