import React, { Component } from 'react'
import { Container, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import GMap from './GMap.js'

class Test extends Component {
  componentDidMount() {
    // TODO
    // we need to be securely store the api key similar to how we do in the backend
    // const GM_API_KEY = 'AIzaSyCNmXaxE50W4Ln2WHcVIOOcrkDoh-AXedM'
    // console.log(GM_API_KEY)
    // https://maps.googleapis.com/maps/api/js?key=${GM_API_KEY}&callback=initMap
  }
  render () {
    return <Container text textAlign='center'>
      <GMap/>
      <Button as={Link} to='/'>Back to home</Button>
    </Container>
  }
}

export default Test