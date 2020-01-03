import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { grommet } from 'grommet';
import Main from './Main.js';
import About from './About.js';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <div>
        <Route exact path="/" render={
          props => <Main {...props} initialValue={12} /> 
        } />
        <Route exact path="/about" component={About} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;