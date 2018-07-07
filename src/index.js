import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import { startSetExpenses } from './actions/expenses';
import { firebase } from  './firebase/firebase';
import { history } from './routers/AppRouter';
import { login, logout } from './actions/auth';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('root'));
        hasRendered = true;
    }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
          });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
  });

registerServiceWorker();
