import React, { Component } from 'react'
import { Header, Segment, Button, Grid } from 'semantic-ui-react'
import './layout.css'
import SearchBar from '../search_bar/search_bar'
import { Link } from 'react-router-dom'

class LayoutHeader extends Component {
  render () {
    return (
      <Segment>
        <Grid columns={2} verticalAlign='middle'>
          <Grid.Column>
            <Header as='h3' textAlign='left'>
              <SearchBar />
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header as='h3' textAlign='right'>
              <Button as={Link} to='/sign_in' basic color='grey' content='Sign In' size='huge'/>
            </Header>
          </Grid.Column>
        </Grid>
      </Segment>
  )}
}

export default LayoutHeader