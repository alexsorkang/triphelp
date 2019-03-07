import React, { Component } from 'react'
import { Grid, Menu, Card, Ref, Table } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import { editItinerary, fetchItinerary } from '../../../../actions/itinerary';


class Section extends Component {

  render() {
    const section = this.props.section
    // console.log(section)
    console.log(section)
    return (
      <Table color='red' key={section.name}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>{section.name}</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {section.items.map((item, index) => (
            <Draggable
              key={item.id}
              draggableId={item.id}
              index={index}>
              {(provided, snapshot) => (
                <Ref innerRef={provided.innerRef}>
                  <Table.Row 
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}>
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                  </Table.Row>
                </Ref>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </Table.Body>
      </Table>
    )
  }
};

export default Section