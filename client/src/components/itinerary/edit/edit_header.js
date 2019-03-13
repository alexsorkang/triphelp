import React, { Component } from 'react'
import _ from 'lodash'
import { Grid, Header, Button, Icon, Input } from 'semantic-ui-react'
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
    if (this.props.editModeReducer === 'view') {
      this.props.editMode('edit')
    } else {
      this.props.editMode('view')
    }
  }

  handleChange(e, {value}) {
    // console.log(value)
  }

  modeButton() {
    const mode = this.props.editModeReducer
    if (mode === 'edit') {
      return (
        <Button floated='right' onClick={this.handleClick} basic color='green'>
          <Icon name='eye' />view
        </Button>
      )
    } else {
      return (
        <Button floated='right' onClick={this.handleClick} basic color='grey'>
          <Icon name='edit' />edit
        </Button>
      )
    }
  }

  modeItineraryName() {
    const mode = this.props.editModeReducer
    const name = this.props.fetchItineraryReducer.itinerary.name
    if (mode === 'edit') {
      return (
        <Input 
          placeholder='Name your trip'
          defaultValue={name}
          onChange={_.debounce(this.handleChange, 750, { 'maxWait': 1000 })} />
      )
    } else {
      return (
        <div>{name}</div>
      )
    }
  }

  render () {
    return (
      <Grid.Row columns={2}>
        <Grid.Column>
          <Header
            as='h2'
            floated='left'
          >
            <Header.Content>{this.modeItineraryName()}</Header.Content>
            <Header.Subheader>edit your current itinerary</Header.Subheader>
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Button floated='right' basic color='grey'>
            <Icon name='setting' />settings
          </Button>
          {this.modeButton()}
        </Grid.Column>
      </Grid.Row>
  )}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditHeader)