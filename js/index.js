import ReactDOM from 'react-dom';
import React from 'react';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory'
import axios from 'axios';

import { createStore, applyMiddleware, compose } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';

import rootReducer from './reducers';

import Header from './components/common/Header';
import IndexContainer from './containers/IndexContainer';
import MainCatContainer from './containers/MainCatContainer';

require('../less/app.less');

const history = createHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const routingMiddleware = routerMiddleware(history);
const middleware = [ thunk, routingMiddleware ];

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(...middleware)
));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Header />
          <Route exact path="/" component={IndexContainer} />
          <Route path="/mainCat" component={MainCatContainer} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
