import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Index from './pages/index';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={Index} />
    </Switch>
  </Router>
);

export default hot(App);
