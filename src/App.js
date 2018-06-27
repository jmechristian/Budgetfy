import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import 'normalize.css/normalize.css';

class App extends Component {

  render () {

    const routes = (
      <BrowserRouter></BrowserRouter>
    );

    return (
      <p>Boilerplate</p>
    );
  }
 
}

export default App;
