import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

class SearchButtons extends Component {
  render() {
    return (
      <div>
        <Button basic color='green'>
          Add
        </Button>
        <Button basic color='red'>
          View
        </Button>
      </div>
    )
  }
};

export default SearchButtons