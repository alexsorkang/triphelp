import axios from 'axios';
import { authHeader } from '../_helpers/auth-header';

export const itineraryService = {
    my_itineraries
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