import React, { Component } from 'react'
import { Grid, Menu, Card, Ref } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'
import MyItinerary from './new/my_itinerary'
import SearchResults from './new/search_results'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Map from './new/map'
import { connect } from 'react-redux';
import { editItinerary, fetchItinerary } from '../../actions/itinerary';

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  editItinerary: (itinerary) => dispatch(editItinerary(itinerary))
})

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

class EditItinerary extends Component {
  constructor(props) {
    super(props)
  }

  onDragEnd = result => {
    const { source, destination } = result;
    let dragged;
    // dropped outside the list
    if (!destination) {
      return;
    }
    const itinerary = this.props.editItineraryReducer.itinerary || this.props.fetchItineraryReducer.itinerary || []
    if (source.droppableId === 'droppable' && destination.droppableId === 'droppable') {
      const items = reorder(
        itinerary,
        source.index,
        destination.index
      );
      console.log(1)
      dragged = items
      console.log(dragged)
      this.props.editItinerary(dragged)
    } else if (source.droppableId === 'droppable2' && destination.droppableId === 'droppable') {
      const searchList = this.props.searchReducer.results
      const result = move(
        searchList,
        itinerary,
        source,
        destination
      );
      console.log(2)
      dragged = result.droppable 
      console.log(dragged)
      this.props.editItinerary(dragged)
    }
  }

  render () {
    return (
      <div>
        <Grid padded>
          <Grid.Row columns={2}>
            <DragDropContext onDragEnd={this.onDragEnd}>
              <MyItinerary/>
              <SearchResults/>
            </DragDropContext>
          </Grid.Row>
        </Grid>
      </div>
  )}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditItinerary)