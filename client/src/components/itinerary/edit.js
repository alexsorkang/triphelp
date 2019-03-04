import React, { Component } from 'react'
import { Grid, Menu, Card, Ref } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'
import MyItinerary from './new/my_itinerary'
import SearchResults from './new/search_results'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Map from './new/map'

// fake data generator
const getItems = (count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k + offset}`,
    content: `item ${k + offset}`
  }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: 250
});

class EditItinerary extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: getItems(10),
      selected: getItems(5, 10)
    };
  }

  /**
   * A semi-generic way to handle multiple lists. Matches
   * the IDs of the droppable container to the names of the
   * source arrays stored in the state.
   */
  id2List = {
    droppable: 'items',
    droppable2: 'selected'
  };

  getList = id => this.state[this.id2List[id]];

  onDragEnd = result => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      );

      let state = { items };

      if (source.droppableId === 'droppable2') {
        state = { selected: items };
      }

      this.setState(state);
    } else {
      const result = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      );

      this.setState({
        items: result.droppable,
        selected: result.droppable2
      });
    }
    console.log(this.state)
  }

  render () {
    return (
      <div>
        <Grid padded>
          <Grid.Row columns={2}>
            <DragDropContext onDragEnd={this.onDragEnd}>
              <Grid.Column textAlign='center'>
                <Droppable droppableId="droppable">
                  {(provided, snapshot) => (
                    <Menu fluid vertical className='grid_menu'>
                      <Card.Group centered className='card_group'>
                        <div ref={provided.innerRef}>
                          {this.state.items.map((item, index) => (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}>
                              {(provided, snapshot) => (
                                <Ref innerRef={provided.innerRef}>
                                  <Card
                                    fluid
                                    href='#card-example-link-card'
                                    header={item.content}
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
              <Grid.Column textAlign='center'>
                <Droppable droppableId="droppable2">
                  {(provided, snapshot) => (
                    <Menu fluid vertical className='grid_menu'>
                      <Card.Group centered className='card_group'>
                        <div ref={provided.innerRef}>
                          {this.state.selected.map((item, index) => (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}>
                              {(provided, snapshot) => (
                                <Ref innerRef={provided.innerRef}>
                                  <Card
                                    fluid
                                    href='#card-example-link-card'
                                    header={item.content}
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
            </DragDropContext>
          </Grid.Row>
        </Grid>
      </div>
  )}
}

export default EditItinerary