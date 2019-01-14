import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/home/Home'
import NotFound from './components/not_found/NotFound'
import Test from './components/test/Test'

class App extends Component {
  render () {
    return <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/test' exact component={Test} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  }
}

export default App