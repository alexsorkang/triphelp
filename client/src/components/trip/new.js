import React, { Component } from 'react'
import { Container, Grid, Image, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
// import { MyTrip } from './new/MyTrip'
// import { SearchResults } from './new/SearchResults'

class NewTrip extends Component {
  componentDidMount() {
    // TODO
    // we need to be securely store the api key similar to how we do in the backend
    // const GM_API_KEY = 'AIzaSyCNmXaxE50W4Ln2WHcVIOOcrkDoh-AXedM'
    // console.log(GM_API_KEY)
    // https://maps.googleapis.com/maps/api/js?key=${GM_API_KEY}&callback=initMap
  }
  render () {
    return (
      <Container textAlign='center'>
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column>
              <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
            </Grid.Column>
            <Grid.Column>
              <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
            </Grid.Column>
            <Grid.Column>
              <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
            </Grid.Column>
          </Grid.Row>
        </Grid>  
      </Container>
  )}
}

export default NewTrip