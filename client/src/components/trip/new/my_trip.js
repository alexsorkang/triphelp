import React, { Component } from 'react'
import { Grid, Menu } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'

class MyTrip extends Component {
  render () {
    return (
      <Grid.Column>
        <Menu fluid vertical>
          <Menu.Item className='header'>Cats</Menu.Item>
        </Menu>
      </Grid.Column>
  )}
}

export default MyTrip