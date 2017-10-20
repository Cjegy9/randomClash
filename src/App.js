import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import Display from './components/Display';
import Header from './components/Header';
import DeckStats from './components/DeckStats';

import {Button} from 'semantic-ui-react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardArray: [],
      lastDeck: [],
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
    const lastDeck = [...this.state.cardArray];
    axios({
      method: 'get',
      url: 'http://www.clashapi.xyz/api/random-deck',
    }).then(res => {
      this.setState({cardArray: res.data, lastDeck});
    })
  }

  render() {
    const { cardArray } = this.state;
    let elixirCost = 0;
    cardArray.forEach(card => {
      elixirCost += card.elixirCost;
    });
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{marginBottom: 16}}>
          <Header/>
        </div>
        <div style={{padding: '0px 32px'}}>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <Button
              color='blue'
              onClick={() => this.newDeck()}>
              Generate New Deck
            </Button>
            <Button
              color='blue'
              onClick={() => this.setState({cardArray: this.state.lastDeck})}>
              Previous Deck
            </Button>
            <div style={{border: '1px solid none', borderRadius: 4, height: '100%', padding: '9px 12px', background: '#85572d'}}>
              Average Elixir cost: {elixirCost / 8}
              <img style={{paddingLeft: 4}} height="12" src="../../elixir_big_icon.png" />
            </div>
          </div>
          {typeof cardArray !== 'undefined' &&
            <div style={{marginTop: 16}}>
              <Display
                cardArray={cardArray}
              />
            </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
