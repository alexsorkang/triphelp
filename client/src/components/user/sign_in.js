import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Container } from 'semantic-ui-react'
import axios from 'axios'

class SignIn extends Component {
  
  handleSubmit = (e, { name, value }) => {
    console.log(4444)
    // axios.get(url).then(response => {
    //   if (response.data.length) {
    //     this.props.searchQuery(query, 'success')
    //   } else {
    //     this.props.searchQuery(query, 'empty')
    //   }
    //   this.props.searchResults(response.data)
    // })
  }

  render () {
    return (
      <div className='loginForm'>
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='grey' textAlign='center'>
            Log-in to your account
          </Header>
          <Form size='large' onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
              />

              <Button color='grey' fluid size='large'>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href='#'>Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
      </div>
    )






  }
}

export default SignIn