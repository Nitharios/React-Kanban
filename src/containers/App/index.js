import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCards } from '../../actions/cards';
import thunk from 'redux-thunk';
import CardList from '../CardList';

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {

  }

  render() {
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
  console.log('mapstate');
  
  return {
    cards : state.cards
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('mapDispatchToProps');
  
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
