import axios from 'axios';
import { authHeader } from '../_helpers/auth-header';

export const itineraryService = {
    my_itineraries,
    fetch_itinerary
};

function my_itineraries() {
  const requestOptions = {
      // method: 'GET',
      headers: {
                  'Content-Type': 'application/json',
                  'Authorization': authHeader()
               }
  };

  const url = `/api/itineraries`
  return axios.get(url, requestOptions).then(response => {
    if (response.status === 200) {
      return response.data
    } else {
      console.log(1)
      console.log(response.error)
      return Promise.reject(response.error)
    }
  }, 
  error => {
    console.log(2)
    console.log(error)
    return Promise.reject(error)
  })
}

function fetch_itinerary(id) {
  const requestOptions = {
      // method: 'GET',
      headers: {
                  'Content-Type': 'application/json',
                  'Authorization': authHeader()
               }
  };
  const url = `/api/itineraries/${id}`
  return axios.get(url, requestOptions).then(response => {
    console.log(response)
    if (response.status === 200) {
      console.log(response.data)
      return response.data
    } else {
      console.log(1)
      console.log(response.error)
      return Promise.reject(response.error)
    }
  }, 
  error => {
    console.log(2)
    console.log(error)
    return Promise.reject(error)
  })
}