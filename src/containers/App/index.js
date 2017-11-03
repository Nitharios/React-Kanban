import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cards from '../Cards';
import AddCardForm from '../AddCardForm';

class App extends Component {
  render() {
    return(
      <div className="App">

        <Cards />
        <AddCardForm />
        
     </div> 
    )
  };
}

export default connect()(App)

