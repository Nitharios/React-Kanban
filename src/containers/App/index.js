import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCards } from '../../actions/cards';
import { getCardsFromFakeXHR as getCards } from '../../lib/cards.db';
import CardList from '../CardList';

class App extends Component {
  constructor() {
    super();

    // this.queuedCards = [];
    // this.inProgressCards = [];
    // this.completedCards = [];
  }

  componentDidMount() {
    getCards()
    .then(cards => {
      console.log('invoking function getCards in props');
      this.props.loadCards(cards);
    })
  }

  render() {
    console.log(this.props.cards);
    return(
      <div className="App">
        Hello World!

        <CardList
          cards={ this.props.cards }
        />
     </div> 
    )
  };
}

const mapStateToProps = (state) => {
  return {
    cards : state.cards
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCards : (cards) => {
      console.log('loading the cards');
      dispatch(loadCards(cards));
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default ConnectedApp;
