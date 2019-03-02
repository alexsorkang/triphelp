import axios from 'axios';
import { authHeader } from '../_helpers/auth-header';

export const searchService = {
    search
};

function search(query) {
  const requestOptions = {
      // method: 'GET',
      headers: {
                  'Content-Type': 'application/json',
                  'Authorization': authHeader()
               }
      // body: JSON.stringify({ query })
  };

  const url = `/api/search_results?query=${query}`
  return axios.get(url, requestOptions).then(response => {
    if (response.data.length) {
      return response.data
    } else {
      return Promise.reject(response.error)
    }
  }, 
  error => {
    return Promise.reject(error)
  })
}