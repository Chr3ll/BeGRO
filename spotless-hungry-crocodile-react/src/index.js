import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './style.css';
import NotFound1 from './views/not-found';
import Home from './views/home';

const App = () => {
  return (
    <Router>
      <Switch>
        {/* Home page route */}
        <Route exact path="/" component={Home} />

        {/* Custom Not Found route (optional direct path) */}
        <Route exact path="/not-found" component={NotFound1} />

        {/* Catch-all route for undefined paths */}
        <Route component={NotFound1} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
