import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { signOut } from '../../actions/user';

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
})

class UserHeader extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e) {
    this.props.signOut()
  }
  userHeader() {
    const loggedIn = this.props.userReducer.loggedIn
    if (!loggedIn) {
      return (<Button as={Link} to='/login' basic color='grey' content='Sign In' size='huge'/>)
    } else {
      return (<Button onClick={this.handleClick} basic color='grey' content='Sign Out' size='huge'/>) 
    }
  }
  render () {
    return (
      <div>
        {this.userHeader()}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHeader)