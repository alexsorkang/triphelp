import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import MyItinerary from './components/my_itinerary'
import EditHeader from './edit/edit_header'
import SearchResults from './components/search_results'
import { DragDropContext } from 'react-beautiful-dnd';
// import Map from './components/map'
import { connect } from 'react-redux';
import { editItinerary, fetchItinerary, dragPlace, dragSection } from '../../actions/itinerary';

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  editItinerary: (itinerary) => dispatch(editItinerary(itinerary)),
  dragPlace: (id,src,dest,src_order, dest_order,place) => dispatch(dragPlace(id,src,dest,src_order,dest_order,place)),
  dragSection: (id,order) => dispatch(dragSection(id,order)),
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
    if (destination.droppableId === 'itinerary') {
      // moving sections
      // this one already changes the order in place
      const [removed] = itinerary.section_order.splice(source.index, 1)
      itinerary.section_order.splice(destination.index, 0, removed)
      this.props.dragSection(this.props.itineraryId, itinerary.section_order)
    } else if (type === 'droppableSubItem' && destination.droppableId !== 'itinerary' && source.droppableId !== 'search' && destination.droppableId !== 'search') {
      // moving sub items from myItinerary droppable
      // this one does not change order in place
      const itemSubItemMap = itinerary.sections.reduce((acc, item) => {
        acc[item.id] = item.place_order;
        return acc;
      }, {})
      const sourceSubItems = itemSubItemMap[source.droppableId]
      const destSubItems = itemSubItemMap[destination.droppableId]
      let order = reorder(sourceSubItems, destSubItems, source.index, destination.index)
      this.props.dragPlace(this.props.itineraryId, source.droppableId, destination.droppableId, order.src,order.dest,order.removed)
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