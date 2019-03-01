import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'
import MyItinerary from './new/my_itinerary'
import SearchResults from './new/search_results'
import Map from './new/map'

class NewItinerary extends Component {
  render () {
    return (
      <Grid padded>
        <Grid.Row columns={3}>
          <MyItinerary />
          <SearchResults />
          <Map />
        </Grid.Row>
      </Grid>
  )}
}

export default NewItinerary