import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCards } from '../../actions/CardActions';
import CardList from '../CardList';

class App extends Component {

  componentDidMount() {
    console.log('HEHE')
    this.props.loadCards();
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
  console.log('mapstate', state.cards);
  
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

