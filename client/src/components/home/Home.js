import React, { Component } from 'react';
import logo from './logo.svg';
import './home.css';
import {Header, Icon} from 'semantic-ui-react'

class Home extends Component {
  componentDidMount() {
    // window.fetch('/api/trips')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    //   .catch(error => console.log(error))
  }
  render() {
    return (
      <div>
        <Header as='h2' icon textAlign='center'>
          <Icon name='settings' />
          Account Settings
          <Header.Subheader>Manage your account settings and set e-mail preferences.</Header.Subheader>
        </Header>
      </div>
    );
  }
}

export default Home;
