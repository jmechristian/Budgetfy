import React, { Component } from 'react';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { textFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import './App.css';
import 'normalize.css/normalize.css';

class App extends Component {
  render () {

    const store = configureStore();
    store.dispatch(addExpense({ description: 'Water Bill', amount: 300}));
    store.dispatch(addExpense({ description: 'Gas Bill', amount: 100}));
    store.dispatch(textFilter('water'));

    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

    console.log(visibleExpenses);

    return (
      <div>
          <Provider store = {store} >
        <AppRouter />
            </ Provider>
      </div>
    );
  }
}

export default App;
