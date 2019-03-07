import React, { Component } from 'react'
import { Grid, Menu, Card, Ref, Segment, Table } from 'semantic-ui-react'
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

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,
  // styles we need to apply on draggables
  ...draggableStyle
})

class MyItinerary extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchItinerary()
  }

  render () {
    const itinerary = this.props.editItineraryReducer.itinerary || this.props.fetchItineraryReducer.itinerary || []
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
                        color='red' 
                        {...provided.draggableProps} 
                        {...provided.dragHandleProps}>
                        <Table.Header>
                          <Table.Row>
                            <Table.HeaderCell width={12}>{section.name}</Table.HeaderCell>
                            <Table.HeaderCell width={2}></Table.HeaderCell>
                            <Table.HeaderCell width={2}></Table.HeaderCell>
                          </Table.Row>
                        </Table.Header>
                        <Droppable droppableId={section.name} type={`droppableSubItem`}>
                          {(provided, snapshot) => (
                            <Ref innerRef={provided.innerRef}>
                              <Table.Body {...provided.draggableProps}
                                          // style={getItemStyle(
                                          //   snapshot.isDragging,
                                          //   provided.draggableProps.style
                                          // )}
                                          >
                                {section.items.map((item, index) => (
                                  <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided, snapshot) => (
                                      <Ref ref={provided.innerRef}>
                                        <Table.Row 
                                          {...provided.draggableProps} 
                                          {...provided.dragHandleProps}>
                                          <Table.Cell>{item.name}</Table.Cell>
                                          <Table.Cell>a</Table.Cell>
                                          <Table.Cell>b</Table.Cell>
                                        </Table.Row>
                                      </Ref>
                                      {provided.placeholder}
                                    )}
                                  </Draggable>
                                ))}
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