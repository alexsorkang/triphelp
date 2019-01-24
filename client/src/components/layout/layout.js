import React, { Component } from 'react'
// import { Header } from 'semantic-ui-react'
import LayoutHeader from './layout_header'
// import GMap from './GMap.js'

class Layout extends Component {
  render () {
    return <div>
      <LayoutHeader/>
      {this.props.children}
    </div>
  }
}

export default Layout