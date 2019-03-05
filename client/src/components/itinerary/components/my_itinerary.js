import React, { Component } from 'react'
import { Grid, Menu, Card, Ref, Segment, Table } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Section from './section/section'
import { connect } from 'react-redux';
import { editItinerary, fetchItinerary } from '../../../actions/itinerary';

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  editItinerary: (itinerary) => dispatch(editItinerary(itinerary)),
  fetchItinerary: (itinerary) => dispatch(fetchItinerary(itinerary))
})

class MyItinerary extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchItinerary()
  }

  render () {
    const itinerary = this.props.fetchItineraryReducer.itinerary || []
    // console.log(itinerary[0].name)
    // console.log(itinerary[0].items)
    return (
      <Grid.Column textAlign='center'>
        {itinerary.map((section) => (
          <Section section={section} />
          )
        )}
      </Grid.Column>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyItinerary)