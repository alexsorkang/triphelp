import React, { Component } from 'react'
import { Grid, Header, Container, Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { editMode } from '../../../actions/itinerary';

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  editMode: (mode) => dispatch(editMode(mode))
})

class EditHeader extends Component {
  
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.props.editMode('edit')
  }

  render () {
    console.log(this.props)
    return (
      <Grid.Row columns={2}>
        <Grid.Column>
          <Header
            as='h2'
            content='Your Itinerary'
            subheader='edit your current itinerary'
            floated='left'
          />
        </Grid.Column>
        <Grid.Column>
          <Button floated='right' basic color='grey'>
            <Icon name='setting' />settings
          </Button>
          <Button floated='right' onClick={this.handleClick} basic color='grey'>
            <Icon name='edit' />edit
          </Button>
        </Grid.Column>
      </Grid.Row>
  )}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditHeader)