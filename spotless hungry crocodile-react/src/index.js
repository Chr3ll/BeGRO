import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
//import NotFound1, { NotFound } from './views/not-found'
//import NotFound1, { NotFound } from '/views/not-found.js'
import NotFound1 from './views/not-found'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/not-found" component={NotFound1} />
        <Route component={NotFound1} />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
