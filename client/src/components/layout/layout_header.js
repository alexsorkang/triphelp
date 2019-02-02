import React, { Component } from 'react'
import { Header, Segment } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'
import SearchBar from '../search_bar/search_bar'

class LayoutHeader extends Component {
  render () {
    return (
      <Segment>
        <Header as='h3' textAlign='justified'>
          <SearchBar />
        </Header>
      </Segment>
  )}
}

export default LayoutHeader