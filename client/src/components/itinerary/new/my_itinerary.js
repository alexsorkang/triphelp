import React, { Component } from 'react'
import { Grid, Menu, Card, Ref } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import { editItinerary, fetchItinerary } from '../../../actions/itinerary';

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  editItinerary: (itinerary) => dispatch(editItinerary(itinerary)),
  fetchItinerary: (itinerary) => dispatch(fetchItinerary(itinerary))
})

class MyItinerary extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchItinerary()
  }

  render () {
    const items = this.props.editItineraryReducer.itinerary || this.props.fetchItineraryReducer.itinerary || []
    return (
      <Grid.Column textAlign='center'>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <Menu fluid vertical className='grid_menu'>
              <Card.Group centered className='card_group'>
                <div ref={provided.innerRef}>
                  {items.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}>
                      {(provided, snapshot) => (
                        <Ref innerRef={provided.innerRef}>
                          <Card
                            fluid
                            href={item.id}
                            header={item.name}
                            meta='Friend'
                            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                            className='card_margin'
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          />
                        </Ref>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              </Card.Group>
            </Menu>
          )}
        </Droppable>
      </Grid.Column>
  )}
}

export default connect(mapStateToProps, mapDispatchToProps)(MyItinerary)