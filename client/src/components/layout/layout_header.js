import React, { Component } from 'react'
import { Header, Segment } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'
// import GMap from './GMap.js'

class LayoutHeader extends Component {
  render () {
    return (
      <Segment>
        <Header as='h3' textAlign='justified'>
          This is a placeholder header for vertical spacing
        </Header>
      </Segment>
  )}
}

export default LayoutHeader