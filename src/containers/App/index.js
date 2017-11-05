import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCards } from '../../actions/CardActions';
import AddCardForm from '../AddCard';
import ColumnComponent from '../../components/ColumnComponent';

class App extends Component {
  componentDidMount() {
    this.props.loadCards();
  }

  render() {
    return(
      <div className="App">

        <AddCardForm />
        <ColumnComponent 
          cards={ this.props.cards }
          status_id="1"
          status_name="in-queue"
        />
        <ColumnComponent 
          cards={ this.props.cards }
          status_id="2"
          status_name="in-progress"
        />
        <ColumnComponent 
          cards={ this.props.cards }
          status_id="3"
          status_name="done"
        />

     </div> 
    )
  };
}

const mapStateToProps = state => {
  return {
    cards : state.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadCards : cards => {
      dispatch(loadCards(cards));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)