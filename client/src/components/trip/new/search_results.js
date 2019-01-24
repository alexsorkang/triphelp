import React, { Component } from 'react'
import { Grid, Menu } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'

class SearchResults extends Component {
  render () {
    return (
      <Grid.Column textAlign='center'>
        <Menu fluid vertical>
          <Menu.Item className='header'>Dogs</Menu.Item>
          <Menu.Item>Poodle</Menu.Item>
          <Menu.Item>Cockerspaniel</Menu.Item>
        </Menu>
      </Grid.Column>
  )}
}

export default SearchResults