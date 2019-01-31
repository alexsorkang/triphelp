import React, { Component } from 'react'
import { Search, Grid, Header, Segment, Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { searchResults } from '../../../../actions/search_results';

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  searchResults: () => dispatch(searchResults())
})

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      query: '',
      items: ['placeholder']
    };
  }
  searchResults = (event) => {
    this.props.searchResults();
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  search = () => {
    const { query } = this.state
    window.fetch(`/api/search_results?query=${query}`)
      .then(response => response.json())
      .then(json => {
        this.setState({isLoaded:true, items: json})
        this.props.searchResults()
        }).catch(error => this.setState({isLoaded: true, error}))
  }

  render() {
    const { isLoading, value, results } = this.state
    console.log(this.state)
    return (
      <Form onSubmit={this.search}>
        <Form.Group>
          <Form.Input placeholder='search' name='query' onChange={this.handleChange} />
          <Form.Button content='Submit' />
        </Form.Group>
      </Form>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)