import _ from 'lodash'
import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { searchResults, searchQuery } from '../../actions/search';

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  searchResults: (result) => dispatch(searchResults(result)),
  searchQuery: (query) => dispatch(searchQuery(query)),  
})

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      query: '',
      items: ['placeholder']
    }
  }

  handleChange = (e, { name, value }) => {
    this.props.searchQuery(value)
    this.setState({ [name]: value })
    this.search(value)
  }

  search = (query) => {
    window.fetch(`/api/search_results?query=${query}`)
      .then(response => response.json())
      .then(json => {
        this.setState({isLoaded:true, items: json})
        this.props.searchResults(json)
        }).catch(error => this.setState({isLoaded: true, error}))
  }

  render() {
    const { isLoading, value, results } = this.state
    return (
      <Input placeholder='search' icon='search' name='query' onChange={_.debounce(this.handleChange, 750, { 'maxWait': 1000 })} />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)