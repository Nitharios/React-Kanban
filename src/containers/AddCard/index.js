import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../actions/CardActions';

class AddCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title : '',
      priority : 1,
      status : 1,
      created_by : '',
      assigned_to : ''
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
            value={ this.state.title } />
          <select
            name="priority"
            defaultValue={ this.state.priority }
            onChange={ this.handleChange.bind(this) }>
            <option value="1">High</option>
            <option value="2">Medium</option>
            <option value="3">Low</option>
            <option value="4">Blocker</option>
          </select>
          <input
            name="created_by"
            placeholder="Created by..."
            onChange={ this.handleChange.bind(this) }
            value={ this.state.created_by} />
          <input
            name="assigned_to"
            placeholder="Assigned to..."
            onChange={ this.handleChange.bind(this) }
            value={ this.state.assigned_to } />
          <input
            type="submit"
            value="Submit Task" />
        </form>
      </div>
    )
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
  null,
  mapDispatchToProps
)(AddCardForm);
