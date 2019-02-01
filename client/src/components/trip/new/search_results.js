import React, { Component } from 'react'
import { Grid, Menu, Card } from 'semantic-ui-react'
import './grid_column.css'
import { connect } from "react-redux";
import SearchBar from './search_bar/search_bar'

const mapStateToProps = state => ({
  ...state
})

class SearchResults extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   error: null,
    //   isLoaded: false,
    //   items: ['placeholder']
    // };
  }

  render () {
    const items = this.props.searchReducer
    const cards = items.map(item => (
        <Card
          fluid
          key={item}
          href='#card-example-link-card'
          header={item}
          meta='Friend'
          description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
          className='card_margin'
        />
      )
    )
    return (
      <Grid.Column textAlign='center'>
        <Menu fluid vertical className='grid_menu'>
          <Card.Group centered className='card_group'>
            {cards}
          </Card.Group>
        </Menu>
      </Grid.Column>
  )}
}

export default connect(mapStateToProps)(SearchResults)