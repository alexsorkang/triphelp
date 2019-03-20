import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import MyItinerary from './components/my_itinerary'
import EditHeader from './edit/edit_header'
import SearchResults from './components/search_results'
import { DragDropContext } from 'react-beautiful-dnd';
// import Map from './components/map'
import { connect } from 'react-redux';
import { editItinerary, fetchItinerary, dragPlace } from '../../actions/itinerary';

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  editItinerary: (itinerary) => dispatch(editItinerary(itinerary)),
  dragPlace: (id,src,dest,src_order, dest_order,place) => dispatch(dragPlace(id,src,dest,src_order,dest_order,place)),
  fetchItinerary: (itinerary) => dispatch(fetchItinerary(itinerary))
})

// a little function to help us with reordering the result
const reorder = (src, dest, startIndex, endIndex) => {
  const [removed] = src.splice(startIndex, 1);
  dest.splice(endIndex, 0, removed);
  return {src,dest,removed}
}

class EditItinerary extends Component {

  onDragEnd = result => {
    const { source, destination, type } = result
    let newItinerary
    // dropped outside the list
    if (!destination) {
      return
    }
    const itinerary = this.props.fetchItineraryReducer.itinerary || []
    const name = this.props.fetchItineraryReducer.name || ''
    console.log(itinerary)
    if (destination.droppableId === 'itinerary') {
      // moving sections
      // reorder(itinerary, source.index, destination.index)
      // this.props.editItinerary(name, itinerary)
    } else if (type === 'droppableSubItem' && destination.droppableId !== 'itinerary' && source.droppableId !== 'search' && destination.droppableId !== 'search') {
      // moving sub items from myItinerary droppable
      const itemSubItemMap = itinerary.sections.reduce((acc, item) => {
        acc[item.id] = item.place_order;
        return acc;
      }, {})
      const sourceSubItems = itemSubItemMap[source.droppableId]
      const destSubItems = itemSubItemMap[destination.droppableId]
      // if (source.droppableId === destination.droppableId) {
      let order = reorder(sourceSubItems, destSubItems, source.index, destination.index)
      this.props.dragPlace(this.props.itineraryId, source.droppableId, destination.droppableId, order.src,order.dest,order.removed)
      console.log(this.props.fetchItineraryReducer.itinerary.sections[0])
      this.props.fetchItinerary(this.props.itineraryId)
      console.log(this.props.fetchItineraryReducer.itinerary.sections[0])
      // } else {
        // const [removed] = sourceSubItems.splice(source.index, 1);
        // destSubItems.splice(destination.index, 0, removed);
        // // newItinerary = itinerary
        // newItinerary = newItinerary.map(item => {
        //   if (item.id === source.droppableId) {
        //     item.items = sourceSubItems
        //   } else if (item.id === destination.droppableId) {
        //     item.items = destSubItems
        //   }
        //   return item;
        // })
        // this.props.editItinerary(newItinerary)
      // }
    } else if (destination.droppableId !== 'search') {
      console.log(source, destination)
      // moving items from search to itinerary
    //   const itemSubItemMap = itinerary.reduce((acc, item) => {
    //     acc[item.name] = item.items;
    //     return acc;
    //   }, {})
    //   const destSubItems = itemSubItemMap[destination.droppableId]
    //   const searchList = this.props.searchReducer.results
    //   const sourceClone = JSON.parse(JSON.stringify(searchList))
    //   const [removed] = sourceClone.splice(source.index, 1)
    //   removed.id = 'clone-' + removed.id + Date.now()
    //   destSubItems.splice(destination.index, 0, removed)
    //   this.props.editItinerary(name, itinerary)
    }
  }

  render () {
    return (
      <div>
        <Grid padded>
          <EditHeader/>
          <Grid.Row columns={2}>
            <DragDropContext onDragEnd={this.onDragEnd}>
              <MyItinerary itineraryId={this.props.itineraryId}/>
              <SearchResults/>
            </DragDropContext>
          </Grid.Row>
        </Grid>
      </div>
  )}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditItinerary)