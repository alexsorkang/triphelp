import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'
import MyTrip from './new/my_trip'
import SearchResults from './new/search_results'
import Map from './new/map'

class NewTrip extends Component {
  render () {
    return (
      <Grid padded>
        <Grid.Row columns={3}>
          <MyTrip />
          <SearchResults />
          <Map />
        </Grid.Row>
      </Grid>
  )}
}

export default NewTrip