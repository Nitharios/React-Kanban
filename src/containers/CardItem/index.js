import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeCardEditable, editCard, deleteCard } from '../../actions/card.actions';
import CardListItem from '../../components/card.component';

class CardItem extends Component {
  constructor(props) {
    super();
    this.state = {
      title : '',
      priority : '',
      status : '',
      created_by : '',
      assigned_to : ''
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleEdit(card) {
    this.props.makeCardEditable(card.id);
    this.setState({
      title : card.title,
      priority : card.priority.id,
      status : card.status.id,
      created_by : card.creator.id,
      assigned_to : card.dev.id
    });
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name] : value
    });
  }

  handleSubmit(id, e) {    
    e.preventDefault();
    this.props.editCard({
      id : id,
      title : this.state.title,
      priority : this.state.priority,
      status : this.state.status,
      created_by : this.state.created_by,
      assigned_to : this.state.assigned_to
    });
  }

  render() {
    return(
      <div>
        <CardListItem 
          card = { this.props.card }
          toggleEdit = { this.toggleEdit.bind(this) }
          editCard = { this.props.editCard }
          deleteCard = { this.props.deleteCard }
          handleChange = { this.handleChange }
          handleSubmit = { this.handleSubmit }
          users = { this.props.users }
          priorities = { this.props.priorities }
          statuses = { this.props.statuses }
        />
      </div>
    );
  }
}

// state carries the information on data which is defined in reducers index
const mapStateToProps = state => {
  return {
    users : state.users,
    priorities : state.priorities,
    statuses : state.statuses
  }
}

const mapDispatchToProps = dispatch => {
  return {
    makeCardEditable : cardID => {
      dispatch(makeCardEditable(cardID));
    },

    editCard : updatedCard => {
      dispatch(editCard(updatedCard));
    },

    deleteCard : cardID => {
      dispatch(deleteCard(cardID));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardItem);