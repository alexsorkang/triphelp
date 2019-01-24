import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/home/home'
import NotFound from './components/not_found/not_found'
import NewTrip from './components/trip/new'
import Layout from './components/layout/layout'

class App extends Component {
  render () {
    return <Layout>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/trip/new' exact component={NewTrip} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Layout>
  }
}

export default App