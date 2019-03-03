import React, { Component } from 'react'
import { Table, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { myItineraries } from '../../actions/itinerary';

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  myItineraries: () => dispatch(myItineraries())
})

class MyItineraries extends Component {
  componentDidMount() {
    this.props.myItineraries()
  }

  itineraries () {
    const my_itineraries = this.props.itineraryReducer
    console.log(my_itineraries)
    if (my_itineraries.itineraries) {
      return my_itineraries.itineraries.map(item => (
        <Table.Row key={item.name}>
          <Table.Cell>{item.name}</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
          <Table.Cell>Jamie was not interested in purchasing our product.</Table.Cell>
          <Table.Cell>
            <Button icon as={Link} to={'/itinerary/' + item.id} floated='right' basic color='grey'>
              <Icon name='edit' />
            </Button>
          </Table.Cell>
        </Table.Row>)
      )
    } else {
      return (
        <Table.Row>
          <Table.Cell>nothing</Table.Cell>
          <Table.Cell>to</Table.Cell>
          <Table.Cell>see here</Table.Cell>
        </Table.Row>)
    } 
  }

  render () {
    return (
      <Table padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Notes</Table.HeaderCell>
            <Table.HeaderCell>
              <Button as={Link} to='/itinerary/new' floated='right' basic color='grey' size='small' content='Create New'/>
            </Table.HeaderCell>

          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.itineraries()}
        </Table.Body>
      </Table>
  )}
}

export default connect(mapStateToProps, mapDispatchToProps)(MyItineraries)