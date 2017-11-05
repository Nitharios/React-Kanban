import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCards, makeCardEditable, editCard, deleteCard } from '../../actions/CardActions';
import ColumnComponent from '../../components/ColumnComponent';

class Cards extends Component {
  constructor() {
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

  componentDidMount() {
    this.props.loadCards();
  }

  render() {    
    return(
      <div id="columns-wrapper">
        <ColumnComponent
          status_id="1"
          status_name="in-queue"
          cards={ this.props.cards }
          toggleEdit={ this.toggleEdit.bind(this) }
          editCard={ this.props.editCard }
          deleteCard={ this.props.deleteCard }
          handleChange={ this.handleChange }
          handleSubmit={ this.handleSubmit} />

        <ColumnComponent
          status_id="2"
          status_name="in-progress"
          cards={ this.props.cards }
          toggleEdit={ this.toggleEdit.bind(this) }
          editCard={ this.props.editCard }
          deleteCard={ this.props.deleteCard }
          handleChange={ this.handleChange }
          handleSubmit={ this.handleSubmit} />

        <ColumnComponent
          status_id="3"
          status_name="done"
          cards={ this.props.cards }
          toggleEdit={ this.toggleEdit.bind(this) }
          editCard={ this.props.editCard }
          deleteCard={ this.props.deleteCard }
          handleChange={ this.handleChange }
          handleSubmit={ this.handleSubmit} />
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

    makeCardEditable : cardID => {
      dispatch(makeCardEditable(cardID));
    },

    editCard : updatedCard => {
      dispatch(editCard(updatedCard));
    },

    deleteCard : cardID => {
      dispatch(deleteCard(cardID));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards)