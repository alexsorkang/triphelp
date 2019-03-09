import React, { Component } from 'react'
import { Grid, Ref, Table, Button, Icon } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import { editItinerary, fetchItinerary } from '../../../actions/itinerary';
import './itinerary.css'

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  editItinerary: (itinerary) => dispatch(editItinerary(itinerary)),
  fetchItinerary: (itinerary) => dispatch(fetchItinerary(itinerary))
})

class MyItinerary extends Component {
  componentDidMount() {
    this.props.fetchItinerary()
  }

  handleClick(e) {
    console.log(12312)
  }

  render () {
    const itinerary = this.props.editItineraryReducer.itinerary || this.props.fetchItineraryReducer.itinerary || []
    // <Button icon='trash alternate outline' size='small' basic color='red' />
    return (
      <Grid.Column textAlign='center'>
        <Droppable droppableId="itinerary">
          {(provided, snapshot) => (
            <div ref={provided.innerRef}>
              {itinerary.map((section, index) => (
                <Draggable key={section.name} draggableId={section.name} index={index}>
                  {(provided, snapshot) => (
                    <Ref innerRef={provided.innerRef}>
                      <Table 
                        fixed 
                        singleLine 
                        selectable 
                        color='grey' 
                        {...provided.draggableProps} 
                        {...provided.dragHandleProps}>
                        <Table.Header>
                          <Table.Row>
                            <Table.HeaderCell width={12}>{section.name}</Table.HeaderCell>
                            <Table.HeaderCell width={2}></Table.HeaderCell>
                            <Table.HeaderCell width={2} textAlign='right'><Button onClick={this.handleClick} icon='edit outline' size='small' basic color='grey' /></Table.HeaderCell>
                          </Table.Row>
                        </Table.Header>
                        <Droppable droppableId={section.name} type={`droppableSubItem`}>
                          {(provided, snapshot) => (
                            <Ref innerRef={provided.innerRef}>
                              <Table.Body {...provided.draggableProps}>
                                {section.items.map((item, index) => (
                                  <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided, snapshot) => (
                                      <Ref innerRef={provided.innerRef}>
                                        <Table.Row
                                          {...provided.draggableProps} 
                                          {...provided.dragHandleProps}>
                                          <Table.Cell>{item.name}</Table.Cell>
                                          <Table.Cell></Table.Cell>
                                          <Table.Cell textAlign='right'></Table.Cell>
                                        </Table.Row>
                                      </Ref>
                                    )}
                                  </Draggable>
                                ))}
                                {provided.placeholder}
                              </Table.Body>
                            </Ref>
                          )}
                        </Droppable>
                        
                      </Table>
                    </Ref>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </Grid.Column>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyItinerary)