import React, { Component } from 'react';
import AppRouter from './routers/AppRouter';

import './App.css';
import 'normalize.css/normalize.css';

class App extends Component {
  render () {

    return (
      <div>
        <AppRouter />
      </div>
    );
  };
};

export default App;
