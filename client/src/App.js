import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/home/home'
import NotFound from './components/not_found/not_found'
import NewTrip from './components/trip/new'
import Layout from './components/layout/layout'
import SignIn from './components/user/sign_in'
import SignUp from './components/user/sign_up'

class App extends Component {
  render () {
    return <Router>
      <Layout>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={SignIn} />
          <Route path='/register' exact component={SignUp} />
          <Route path='/trip/new' exact component={NewTrip} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  }
}

export default App;