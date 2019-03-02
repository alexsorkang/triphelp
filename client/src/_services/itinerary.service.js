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
      return Promise.reject(response.error)
    }
  }, 
  error => {
    return Promise.reject(error)
  })
}