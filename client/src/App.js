import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/home/home'
import NotFound from './components/not_found/not_found'
import NewItinerary from './components/itinerary/new'
import MyItineraries from './components/itinerary/my_itineraries'
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
          <Route path='/my_itineraries' exact component={MyItineraries} />
          <Route path='/register' exact component={SignUp} />
          <Route path='/itinerary/new' exact component={NewItinerary} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  }
}

export default App;