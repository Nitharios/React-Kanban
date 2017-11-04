import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCards, makeCardEditable, editCard, deleteCard } from '../../actions/CardActions';
import CardListItem from '../../components/CardListItem';

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      title : '',
      priority : '',
      status : '',
      created_By : '',
      assigned_To : ''
    }

    this.toggleHidden = this.toggleHidden.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleHidden(e) {
    console.log(e.target);
  }

  toggleEdit(card) {
    this.props.makeCardEditable(card.id);
    this.setState({
      title : card.title,
      priority : card.priority.id,
      status : card.status.id,
      created_By : card.creator.id,
      assigned_To : card.dev.id
    })
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name] : value
    })
  }

  handleSubmit(id, e) {    
    e.preventDefault();
    this.props.editCard({
      id : id,
      title : this.state.title,
      priority : this.state.priority,
      status : this.state.status,
      created_By : this.state.created_By,
      assigned_To : this.state.assigned_To
    })
  }

  componentDidMount() {
    this.props.loadCards();
  }

  render() {
    return(
      <div className="App">
        { this.props.cards
          .map((card, idx) => {
            return(
              <CardListItem 
                id = { card.id }
                title = { card.title }
                priority_Id = { card.priority.id }
                priority = { card.priority.name }
                status_Id = { card.status.id }
                status = { card.status.name }
                created_By = { card.creator.name }
                assigned_To = { card.dev.name }
                toggleEdit = { this.toggleEdit.bind(this, card) }
                isEditing = { card.isEditing }
                editCard = { this.props.editCard }
                deleteCard = { this.props.deleteCard }
                handleChange = { this.handleChange }
                handleSubmit = { this.handleSubmit }
                key = { idx}
              />
            )
          })
        }
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