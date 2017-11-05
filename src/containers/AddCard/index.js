import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../actions/card.actions';
import SelectComponent from '../../components/select.component';

class AddCard extends Component {
  constructor() {
    super();

    this.state = {
      title : '',
      priority : 1,
      status : 1,
      created_by : 1,
      assigned_to : 1
    };
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name] : value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addCard({
      title : this.state.title,
      priority : this.state.priority,
      status : this.state.status,
      created_by : this.state.created_by,
      assigned_to : this.state.assigned_to
    });

    // resets input fields
    this.setState({
      title : '',
      priority : 1,
      status : 1,
      created_by : '',
      assigned_to : ''
    });
  }

  render() {
    return(
      <div id="addCardForm">
        <form onSubmit={ this.handleSubmit.bind(this) }>
          <input
            name="title"
            placeholder="title"
            onChange={ this.handleChange.bind(this) }
            defaultValue={ this.state.title } />

          <SelectComponent
            optionsArr={ this.props.priorities }
            name="priority"
            defaultValue={ this.state.priority }
            onChange={ this.handleChange.bind(this) } />
          
          <SelectComponent
            optionsArr={ this.props.users }
            name="created_by"
            defaultValue={ this.state.created_by }
            onChange={ this.handleChange.bind(this) } />
          
          <SelectComponent
            optionsArr={ this.props.users }
            name="assigned_to"
            defaultValue={ this.state.assigned_to }
            onChange={ this.handleChange.bind(this) } />

          <input
            type="submit"
            value="Submit Task" />

        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users : state.users,
    priorities : state.priorities
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCard : (newCard) => {
      dispatch(addCard(newCard))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCard);
