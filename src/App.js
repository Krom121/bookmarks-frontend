import React, { Component } from 'react';
import { grommet } from 'grommet';
import Comp1 from './Comp1.js';
import Comp2 from './Comp2.js';

class App extends Component {
  render(){
    return (
      <div className="App flex-container">
      <Comp1 />
      <Comp2 />
    </div>
    );
  }
}

export default App;
