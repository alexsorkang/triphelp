import React, { Component } from 'react'
import { Grid, Menu, Card } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'

class MyItinerary extends Component {
  render () {
    return (
      <Grid.Column textAlign='center'>
        <Menu fluid vertical className='grid_menu'>
          <Card.Group centered className='card_group'>
            <Card
              fluid
              href='#card-example-link-card'
              header='My first event'
              meta='Friend'
              description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
              className='card_margin'
            />
            <Card
              fluid
              href='#card-example-link-card'
              header='Second thing to do'
              meta='Friend'
              description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
              className='card_margin'
            />
            <Card
              fluid
              href='#card-example-link-card'
              header='Third event'
              meta='Friend'
              description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
              className='card_margin'
            />
            <Card
              fluid
              href='#card-example-link-card'
              header='Last event of the day'
              meta='Friend'
              description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
              className='card_margin'
            />
          </Card.Group>
        </Menu>
      </Grid.Column>
  )}
}

export default MyItinerary