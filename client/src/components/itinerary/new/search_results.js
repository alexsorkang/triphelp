import React, { Component } from 'react'
import { Grid, Menu, Card, Loader, Segment, Icon, Header, Button } from 'semantic-ui-react'
import './grid_column.css'
import { connect } from "react-redux";
import SearchBar from '../../search_bar/search_bar'
import SearchButtons from './card/search_buttons'

const mapStateToProps = state => ({
  ...state
})

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  search_results () {
    const search = this.props.searchReducer
    const status = search.type
    if (status === 'SEARCH') {
      return (<Segment placeholder><Loader active inline='centered' /></Segment>)
    } else if (status === 'SEARCH_SUCCESS') {
      const cards = search.results.map(item => (
          <Card fluid key={item} className='card_margin'>
            <Card.Content>
              <Card.Header>{item}</Card.Header>
              <Card.Meta>this is sample meta</Card.Meta>
              <Card.Description>
                this is sample description
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <SearchButtons />
            </Card.Content>
          </Card>
        )
      )
      return (<Menu fluid vertical className='grid_menu'>
        <Card.Group centered className='card_group'>
          {cards}
        </Card.Group>
      </Menu>)
    } else if (status === 'SEARCH_ERROR') {
      return (<Segment placeholder>
        <Header icon>
          <Icon name='search' />
          No Results. Try another search term.
        </Header>
        <SearchBar />
      </Segment>)
    } else {
      return (<Segment placeholder>
        <Header icon>
          <Icon name='search' />
          Search
        </Header>
        <SearchBar />
      </Segment>)
    }
  }

  render () {
    return (
      <Grid.Column textAlign='center'>
        {this.search_results()}
      </Grid.Column>
  )}
}

export default connect(mapStateToProps)(SearchResults)