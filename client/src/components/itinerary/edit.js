import React, { Component } from 'react'
import { Grid, Menu, Card, Ref } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'
import MyItinerary from './components/my_itinerary'
import SearchResults from './components/search_results'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Map from './components/map'
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
  const [removed] = list.splice(startIndex, 1);
  list.splice(endIndex, 0, removed);
  return list
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  // this sourceclone is a workaround to clone objects within arrays
  // this will work as long as we dont have functions in the objects
  const sourceClone = JSON.parse(JSON.stringify(source))
  const [removed] = sourceClone.splice(droppableSource.index, 1);
  removed.id = 'clone-' + removed.id + Date.now()
  destination.splice(droppableDestination.index, 0, removed);
  return destination
};

class EditItinerary extends Component {
  constructor(props) {
    super(props)
  }

  onDragEnd = result => {
    const { source, destination, type } = result;
    console.log(result)
    let dragged
    let items;
    // dropped outside the list
    if (!destination) {
      return
    }
    const itinerary = this.props.fetchItineraryReducer.itinerary || []
    console.log(itinerary)

    if (destination.droppableId === 'itinerary') {
      items = reorder(itinerary, source.index, destination.index)
    } 
    else if (type === 'droppableSubItem') {

      const itemSubItemMap = itinerary.reduce((acc, item) => {
        acc[item.name] = item.items;
        return acc;
      }, {})
      const sourceSubItems = itemSubItemMap[source.droppableId]
      const destSubItems = itemSubItemMap[destination.droppableId]
      if (source.droppableId === destination.droppableId) {
        reorder(sourceSubItems, source.index, destination.index)
      } else {
        console.log(sourceSubItems)
        const [removed] = sourceSubItems.splice(source.index, 1);
        console.log(sourceSubItems)
        destSubItems.splice(destination.index, 0, removed);
        let newItinerary = itinerary
        newItinerary = newItinerary.map(item => {
          if (item.id === source.droppableId) {
            item.items = sourceSubItems
          } else if (item.id === destination.droppableId) {
            item.items = destSubItems
          }
          return item;
        })
        this.props.editItinerary(newItinerary)
      }
    }
    console.log(itinerary)

    // } else if (source.droppableId === 'droppable' && destination.droppableId === 'droppable') {
    //   const items = reorder(
    //     itinerary,
    //     source.index,
    //     destination.index
    //   );
    //   // this.props.editItinerary(dragged)
    // } else if (source.droppableId === 'droppable2' && destination.droppableId === 'droppable') {
    //   const searchList = this.props.searchReducer.results
    //   const result = move(
    //     searchList,
    //     itinerary,
    //     source,
    //     destination
    //   );
    //   // this.props.editItinerary(result)
    // }
    // console.log(this.props)
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