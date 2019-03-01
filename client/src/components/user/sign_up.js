import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Container } from 'semantic-ui-react'
import axios from 'axios'
import { connect } from 'react-redux';
import { signUp } from '../../actions/user';

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  signUp: (email, password) => dispatch(signUp(email, password))
  // searchQuery: (query, status) => dispatch(searchQuery(query, status))
})

class SignUp extends Component {
  
  constructor(props) {
    super(props)
    // // reset login status
    // this.props.dispatch(userActions.logout());
    this.state = {
      email: '',
      password: '',
      submitted: false
    };
  }

  handleSubmit = (e, { name, value }) => {
    e.preventDefault();
    this.setState({ submitted: true });
    const { email, password } = this.state;
    this.props.signUp(email, password)
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render () {
    return (
      <div className='registerForm'>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='grey' textAlign='center'>
              Create your account
            </Header>
            <Form size='large' onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input 
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='E-mail address'
                  name='email'
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  name='password'
                  onChange={this.handleChange}
                />

                <Button color='grey' fluid size='large'>
                  Create Account
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)