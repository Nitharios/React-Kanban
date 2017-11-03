import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../actions/CardActions';

class AddCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title : '',
      priority : 3,
      status : 1,
      created_By : 1,
      assigned_To : 1
    }
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name] : value
    })
  }

  handleSubmit(e) {
    // e.preventDefault();
    this.props.addCard({
      title : this.state.title,
      priority : this.state.priority,
      created_By : this.state.created_By,
      assigned_To : this.state.assigned_To
    })
  }

  render() {
    return(
      <div id="addCardForm">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            className="addInput"
            name="title"
            placeholder="title"
            onChange={ this.handleChange.bind(this) }
            value={ this.state.title } />
          <select
            className="addInput"
            name="priority"
            onChange={ this.handleChange.bind(this) }
            value={ this.state.priority } >
            <option value="low">Low</option>
            <option value="low">Medium</option>
            <option value="low">High</option>
            <option value="low">Blocker</option>
          </select>
          <input
            className="addInput"
            name="created_By"
            placeholder="Created by..."
            onChange={ this.handleChange.bind(this) }
            value={ this.state.created_By} />
          <input
            className="addInput"
            name="assigned_To"
            placeholder="Assigned to..."
            onChange={ this.handleChange.bind(this) }
            value={ this.state.assigned_To } />
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
