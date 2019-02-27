import React, { Component } from 'react'
import LayoutHeader from './layout_header'

class Layout extends Component {
  render () {
    return <div>
      <LayoutHeader/>
      {this.props.children}
    </div>
  }
}

export default Layout