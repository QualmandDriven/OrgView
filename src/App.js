import React, { Component } from 'react';
import './App.css';

import Header from './structure/Header';
import Content from './structure/Content';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;