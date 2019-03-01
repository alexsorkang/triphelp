import React, { Component } from 'react'
import LayoutHeader from './layout_header'

class Layout extends Component {

  header () {
    if (window.location.pathname !== '/') {
      return (<LayoutHeader/>)
    }
    return
  }

  render () {
    return <div>
      {this.header()}
      {this.props.children}
    </div>
  }
}

export default Layout