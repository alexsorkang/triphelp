import React, { Component } from 'react'
import { Grid, Menu, Card, Search } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'
import './grid_column.css';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: ['placeholder']
    };
  }
  componentDidMount() {
    // window.fetch('/api/search_results')
    //   .then(response => response.json())
    //   .then(json => this.setState({isLoaded:true, items: json}))
    //   .catch(error => this.setState({isLoaded: true, error}))
  }
  render () {
    const { error, isLoaded, items } = this.state;
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

export default SearchResults