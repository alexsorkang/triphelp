import React, { Component } from 'react'
import { Header, Segment } from 'semantic-ui-react'
import './layout.css'
import SearchBar from '../search_bar/search_bar'

class LayoutHeader extends Component {
  render () {
    return (
      <Segment>
        <Header as='h3' textAlign='justified' className='headerLayout'>
          <SearchBar />
        </Header>
      </Segment>
  )}
}

export default LayoutHeader