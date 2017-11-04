import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCards, makeCardEditable, editCard, deleteCard } from '../../actions/CardActions';
import CardListItem from '../../components/CardListItem';

class Cards extends Component {
  constructor() {
    super();
    
    this.toggleHidden = this.toggleHidden.bind(this); 
  }

  toggleHidden(e) {
    console.log(e.target);
  }

  toggleEdit(cardID) {
    this.props.makeCardEditable(cardID);
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
                priority = { card.priority.name }
                status = { card.status.name }
                created_By = { card.creator.name }
                assigned_To = { card.dev.name }
                toggleEdit = { this.toggleEdit.bind(this, card.id) }
                isEditing = { card.isEditing }
                editCard = { this.props.editCard }
                deleteCard = { this.props.deleteCard }
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