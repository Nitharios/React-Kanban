import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCards, deleteCard } from '../../actions/CardActions';
import CardList from '../CardList';
import AddCardForm from '../AddCardForm';

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
          deleteCard={ this.props.deleteCard }
        />

        <AddCardForm />

     </div> 
    )
  };
}

// state carries the information on data which is defined in reducers index
const mapStateToProps = state => {
  return {
    cards : state.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadCards : cards => {
      dispatch(loadCards(cards));
    },

    deleteCard : id => {
      dispatch(deleteCard(id));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

