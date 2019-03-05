import React, { Component } from 'react'
import { Grid, Menu, Card, Ref, Table } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import { editItinerary, fetchItinerary } from '../../../../actions/itinerary';


class Section extends Component {
  render() {
    const items = this.props.items
    return (
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div ref={provided.innerRef}>
            <Menu fluid vertical className='grid_menu'>
              <Card.Group centered className='card_group'>
                {items.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={item.id}
                    index={index}>
                    {(provided, snapshot) => (
                      <Ref innerRef={provided.innerRef}>
                        <Card
                          fluid
                          href='#card-example-link-card'
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
              </Card.Group>
            </Menu>
          </div>
        )}
      </Droppable>
    )
  }
};

export default Section