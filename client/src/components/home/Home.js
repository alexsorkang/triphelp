import React, { Component } from 'react';
import logo from './logo.svg';
import './home.css';
import {Header, Icon, Segment, Grid} from 'semantic-ui-react'
import SearchBar from '../search_bar/search_bar'
import UserHeader from '../layout/user_header'
import Helmet from 'react-helmet';

class Home extends Component {
  componentDidMount() {
  }
  render() {
    // {style: 'background-image: linear-gradient(#073642, #b58900)'}
    return (
      <div className='home'>
        {/*<Helmet bodyAttributes={{style: 'background-color: #073642'}}/>*/}
        {/*<UserHeader />*/}
        {/*<Grid columns={1} textAlign='center' centered verticalAlign='middle'>
            <Grid.Column textAlign='center'>
                <SearchBar size='massive' />
            </Grid.Column>
        </Grid>*/}
      </div>
    );
  }
}

export default Home;
