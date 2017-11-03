import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCards, deleteCard } from '../../actions/CardActions';
import CardListItem from '../../components/CardListItem';

class Cards extends Component {
  constructor() {
    super();
    
    this.state = {
      isHidden : true
    }
  }

  toggleHidden () {
    this.setState({
      isHidden : !this.state.isHidden
    })
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
                created_By = { card.user.name }
                assigned_To = { card.assigned_To }
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

    deleteCard : id => {
      dispatch(deleteCard(id));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards)