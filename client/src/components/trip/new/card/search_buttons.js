import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import axios from 'axios'

class SearchButtons extends Component {
  handleClick = () => {
    const url = `/api/search_results/`
    // axios.get(url).then(response => {
    //   if (response.data.length) {
    //     this.props.searchQuery(query, 'success')
    //   } else {
    //     this.props.searchQuery(query, 'empty')
    //   }
    //   this.props.searchResults(response.data)
    // })
  }
  render() {
    return (
      <div>
        <Button 
          basic
          color='green'
          content='Add'
          onClick={this.handleClick}
        />
        <Button 
          basic
          color='red'
          content='View'
        />
      </div>
    )
  }
};

export default SearchButtons