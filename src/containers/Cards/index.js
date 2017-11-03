import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCards, makeCardEditable, deleteCard } from '../../actions/CardActions';
import CardListItem from '../../components/CardListItem';

class Cards extends Component {
  constructor() {
    super();
    
    this.toggleHidden = this.toggleHidden.bind(this); 
  }

  toggleHidden(e) {
    console.log(e.target);
  }

  editCard(cardID) {
    console.log(cardID);
    this.props.makeCardEditable(cardID);
  }

  componentDidMount() {
    this.props.loadCards();
  }

  render() {
    return(
      <div className="App">
        {this.props.cards
          .map((card, idx) => {
            return(
              <CardListItem 
                id = { card.id }
                title = { card.title }
                priority = { card.priority.name }
                status = { card.status.name }
                created_By = { card.creator.name }
                assigned_To = { card.dev.name }
                deleteCard = { this.props.deleteCard }
                toggleHidden = { this.toggleHidden }
                editCard = { this.editCard.bind(this, card.id) }
                isEditing = { card.isEditing }
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
  console.log('string', state.data);
  
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

    deleteCard : cardID => {
      dispatch(deleteCard(cardID));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards)