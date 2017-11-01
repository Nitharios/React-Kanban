import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="App">
        Hello World!
     </div> 
    )
  };
}

const ConnectedApp = connect(

)(App)

export default ConnectedApp;
