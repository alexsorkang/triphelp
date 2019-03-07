import React, { Component } from 'react'
import { Header, Segment, Grid } from 'semantic-ui-react'
import './layout.css'
import SearchBar from '../search_bar/search_bar'
import UserHeader from './user_header'

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
              <UserHeader/>
            </Header>
          </Grid.Column>
        </Grid>
      </Segment>
  )}
}

export default LayoutHeader