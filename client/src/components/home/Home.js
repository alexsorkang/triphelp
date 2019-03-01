import React, { Component } from 'react';
import logo from './logo.svg';
import './home.css';
import {Header, Icon} from 'semantic-ui-react'
import Helmet from 'react-helmet';

class Home extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <Helmet bodyAttributes={{style: 'background-image: linear-gradient(#073642, #b58900)'}}/>
        <Header as='h2' icon textAlign='center'>
          <Header.Subheader>Manage your account settings and set e-mail preferences.</Header.Subheader>
        </Header>
      </div>
    );
  }
}

export default Home;
