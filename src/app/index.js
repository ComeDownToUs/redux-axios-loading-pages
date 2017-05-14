import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import routes from './routes';
import reducers from './reducers/reducers';

// Import stylesheets like this, if you choose:
// import './public/stylesheets/base.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
  );

ReactDOM.render(
  <Provider store={store}>
    <Router
      history={browserHistory}
      routes={routes}
    />
  </Provider>,
  document.querySelector('.wrapper')
);
