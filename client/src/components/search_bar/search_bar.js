import _ from 'lodash'
import React, { Component } from 'react'
import axios from 'axios'
import { Input } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { searchResults, searchQuery } from '../../actions/search';

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  searchResults: (result) => dispatch(searchResults(result)),
  searchQuery: (query, status) => dispatch(searchQuery(query, status))
})

class SearchBar extends Component {
  constructor(props) {
    super(props)
  }

  handleChange = (e, { name, value }) => {
    this.props.searchQuery(value, 'loading')
    this.search(value)
  }

  search = (query) => {
    const url = `/api/search_results?query=${query}`
    axios.get(url).then(response => {
      if (response.data.length) {
        this.props.searchQuery(query, 'success')
      } else {
        this.props.searchQuery(query, 'empty')
      }
      this.props.searchResults(response.data)
    })
  }

  render() {
    return (
      <Input placeholder='search' icon='search' name='query' onChange={_.debounce(this.handleChange, 750, { 'maxWait': 1000 })} />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)