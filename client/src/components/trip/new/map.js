import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
// import { Link } from 'react-router-dom'

class Map extends Component {
  componentWillMount() {
    // TODO
    // add env file to gitignore
    const GM_API_KEY = `${process.env.REACT_APP_GOOGLE_API_KEY}`;
    this.url = `https://maps.googleapis.com/maps/api/js?v=3&key=${GM_API_KEY}`
  }
  render() {
    const GoogleMapExample = withScriptjs(withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
        defaultZoom = { 13 }
      >
      </GoogleMap>
    )));
    return(
      <Grid.Column>
        <GoogleMapExample
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${this.url}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={ <div style={{ height: `500px` }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </Grid.Column>
    );
  }
};


export default Map