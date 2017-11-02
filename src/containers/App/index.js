import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCards } from '../../actions/CardActions';
import CardList from '../CardList';

class App extends Component {

  componentDidMount() {
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
  return {
    cards : state.cards
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCards : (cards) => {
      dispatch(loadCards(cards));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

