import React, { Component } from 'react'
import { Grid, Header, Container } from 'semantic-ui-react'
import MyItinerary from './components/my_itinerary'
import EditHeader from './edit/edit_header'
import SearchResults from './components/search_results'
import { DragDropContext } from 'react-beautiful-dnd';
// import Map from './components/map'
import { connect } from 'react-redux';
import { editItinerary } from '../../actions/itinerary';

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
}

class EditItinerary extends Component {

  onDragEnd = result => {
    const { source, destination, type } = result
    let newItinerary
    // dropped outside the list
    if (!destination) {
      return
    }
    const itinerary = this.props.editItineraryReducer.itinerary || this.props.fetchItineraryReducer.itinerary || []
    const name = this.props.editItineraryReducer.name || this.props.fetchItineraryReducer.name || []
    if (destination.droppableId === 'itinerary') {
      // moving sections
      reorder(itinerary, source.index, destination.index)
      this.props.editItinerary(name, itinerary)
    } else if (type === 'droppableSubItem' && destination.droppableId !== 'itinerary' && source.droppableId !== 'search' && destination.droppableId !== 'search') {
      // moving sub items from myItinerary droppable
      const itemSubItemMap = itinerary.reduce((acc, item) => {
        acc[item.name] = item.items;
        return acc;
      }, {})
      const sourceSubItems = itemSubItemMap[source.droppableId]
      const destSubItems = itemSubItemMap[destination.droppableId]
      if (source.droppableId === destination.droppableId) {
        reorder(sourceSubItems, source.index, destination.index)
        this.props.editItinerary(name, itinerary)
      } else {
        const [removed] = sourceSubItems.splice(source.index, 1);
        destSubItems.splice(destination.index, 0, removed);
        newItinerary = itinerary
        newItinerary = newItinerary.map(item => {
          if (item.id === source.droppableId) {
            item.items = sourceSubItems
          } else if (item.id === destination.droppableId) {
            item.items = destSubItems
          }
          return item;
        })
        this.props.editItinerary(name, newItinerary)
      }
    } else if (destination.droppableId !== 'search') {
      // moving items from search to itinerary
      const itemSubItemMap = itinerary.reduce((acc, item) => {
        acc[item.name] = item.items;
        return acc;
      }, {})
      const destSubItems = itemSubItemMap[destination.droppableId]
      const searchList = this.props.searchReducer.results
      const sourceClone = JSON.parse(JSON.stringify(searchList))
      const [removed] = sourceClone.splice(source.index, 1)
      removed.id = 'clone-' + removed.id + Date.now()
      destSubItems.splice(destination.index, 0, removed)
      this.props.editItinerary(name, itinerary)
    }
  }

  render () {
    return (
      <div>
        <Grid padded>
          <EditHeader/>
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