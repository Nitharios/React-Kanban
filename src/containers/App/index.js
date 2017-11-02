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

// state carries the information on data which is defined in reducers index
const mapStateToProps = (state) => {
  return {
    cards : state.data
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

