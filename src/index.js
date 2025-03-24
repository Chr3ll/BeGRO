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
<<<<<<< HEAD
        <Route component={NotFound1} exact path="/not-found" />
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="catch-all" />
        //<Redirect to="**" />
=======
        <Route exact path="/" component={Home} />
        <Route exact path="/not-found" component={NotFound1} />
        <Route component={NotFound1} />
        <Redirect to="**" />
>>>>>>> 24e9838a89ebb57f7347eeab4129cd8e8ab6ff5e
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
