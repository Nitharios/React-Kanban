import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCards } from '../../actions/card.actions';
import { loadUsers } from '../../actions/user.actions';
import { loadPriorities } from '../../actions/priority.actions';
import { loadStatuses } from '../../actions/status.actions';
import ColumnComponent from '../../components/column.component';

class App extends Component {
  componentDidMount() {
    this.props.loadCards();
    this.props.loadUsers();
    this.props.loadPriorities();
    this.props.loadStatuses();
  }

  render() {
    return(
      <div id="app-container">
        <div id="column-wrapper">

          <ColumnComponent
            cards={ this.props.cards }
            status_id="1"
            status_name="In-Queue" />

          <ColumnComponent
            cards={ this.props.cards }
            status_id="2"
            status_name="In-Progress" />

          <ColumnComponent
            cards={ this.props.cards }
            status_id="3"
            status_name="Complete" />

        </div>
     </div> 
    )
  };
}

const mapStateToProps = state => {
  return {
    cards : state.cards,
    users : state.users,
    priorities : state.priorities,
    statuses : state.statuses
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadCards : cards => {
      dispatch(loadCards(cards));
    },

    loadUsers : users => {
      dispatch(loadUsers(users));
    },

    loadPriorities : priorities => {
      dispatch(loadPriorities(priorities));
    },

    loadStatuses : statuses => {
      dispatch(loadStatuses(statuses));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)