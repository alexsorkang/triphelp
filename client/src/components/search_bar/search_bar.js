import _ from 'lodash'
import React, { Component } from 'react'
import axios from 'axios'
import { Input } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { searchResults, searchQuery, loadingStatus } from '../../actions/search';

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  searchResults: (result) => dispatch(searchResults(result)),
  searchQuery: (query) => dispatch(searchQuery(query)),
  loadingStatus: (status) => dispatch(loadingStatus(status))
})

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      items: ['placeholder']
    }
  }

  handleChange = (e, { name, value }) => {
    this.props.searchQuery(value)
    this.props.loadingStatus('loading')
    this.setState({ [name]: value })
    this.search(value)
  }

  search = (query) => {
    const url = `/api/search_results?query=${query}`
    axios.get(url).then(response => {
      if (response.data.length) {
        this.props.loadingStatus('success')
      } else {
        this.props.loadingStatus('empty')
      }
      this.setState({items: response.data})
      this.props.searchResults(response.data)
    })
    // window.fetch(`/api/search_results?query=${query}`)
    //   .then(response => response.json())
    //   .then(json => {
    // this.setState({isLoaded:true, items: json})
    // this.props.searchResults(json)
    //     }).catch(error => this.setState({isLoaded: true, error}))
  }

  render() {
    const { isLoading, value, results } = this.state
    return (
      <Input placeholder='search' icon='search' name='query' onChange={_.debounce(this.handleChange, 750, { 'maxWait': 1000 })} />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)