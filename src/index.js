// DEPENDENCIES //

import React from 'react';
import ReactDOM from 'react-dom';
import {unregister} from './registerServiceWorker';
// import {Provider} from 'react-redux';
// import store from './ducks/store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// STYLES //

import './css/style.scss';

// COMPONENTS //

import Nav from './components/Nav/nav'
import Footer from './components/Footer/footer'

// CONTAINERS //

import Dashboard from './containers/Dashboard/dashboard'

////////////////

ReactDOM.render(
    <BrowserRouter history={createBrowserHistory}>
      <div>
        <Route component={Nav} />
          <Switch>
              <Route path="/" component={Dashboard} />
          </Switch>
        <Route component={Footer} />
      </div>
    </BrowserRouter>,
  document.getElementById('root')
);


// Unregister service worker to avoid hosting issues.

// registerServiceWorker();
unregister();
