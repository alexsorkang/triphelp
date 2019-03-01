import _ from 'lodash'
import React, { Component } from 'react'
import axios from 'axios'
import { Input } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { search } from '../../actions/search';

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  search: (query) => dispatch(search(query))
})

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {size: props.size}
  }

  handleChange = (e, { name, value }) => {
    this.props.search(value)
  }

  render() {
    return (
      <Input placeholder='search' icon='search' size={this.state.size} name='query' onChange={_.debounce(this.handleChange, 750, { 'maxWait': 1000 })} />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)