import React, { Component } from 'react'
import { Grid, Menu, Card, Loader, Segment, Icon, Header, Ref, Table } from 'semantic-ui-react'
import './grid_column.css'
import SearchBar from '../../search_bar/search_bar'
// import SearchButtons from './card/search_buttons'
import { connect } from 'react-redux';
import { editItinerary } from '../../../actions/itinerary';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  editItinerary: (itinerary) => dispatch(editItinerary(itinerary))
})

class SearchResults extends Component {
  search_results () {
    const search = this.props.searchReducer
    const status = search.type
    if (status === 'SEARCH') {
      return (<Segment placeholder><Loader active inline='centered' /></Segment>)
    } else if (status === 'SEARCH_SUCCESS') {
      const cards = search.results.map((item, index) => (
        <Draggable
          key={item.id}
          draggableId={item.id}
          index={index}>
          {(provided, snapshot) => (
            <Ref innerRef={provided.innerRef}>
              <Card
                fluid key={item.id} className='card_margin'
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <Card.Content>
                  <Card.Header>{item.name}</Card.Header>
                  <Card.Meta>this is sample meta</Card.Meta>
                  <Card.Description>
                    this is sample description
                  </Card.Description>
                </Card.Content>
              </Card>
            </Ref>
          )}
        </Draggable>)
      )
      return (<Droppable droppableId="search" type={`droppableSubItem`}>
                {(provided, snapshot) => (
                  <div ref={provided.innerRef}>
                    <Menu fluid vertical className='grid_menu'>
                      <Card.Group centered className='card_group'>
                        {cards}
                      </Card.Group>
                    </Menu>
                  </div>)}
              </Droppable>)
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)