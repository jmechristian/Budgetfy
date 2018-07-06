import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import { startSetExpenses } from './actions/expenses';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));
store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('root'));
  });

registerServiceWorker();
