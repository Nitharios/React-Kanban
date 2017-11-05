import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCards } from '../../actions/CardActions';
import { loadUsers } from '../../actions/UserActions';
import AddCardForm from '../AddCard';
import ColumnComponent from '../../components/ColumnComponent';

class App extends Component {
  componentDidMount() {
    this.props.loadCards();
    this.props.loadUsers();
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
    cards : state.cards,
    users : state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadCards : cards => {
      dispatch(loadCards(cards));
    },

    loadUsers : users => {
      dispatch(loadUsers(users));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)