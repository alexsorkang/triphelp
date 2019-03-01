import axios from 'axios';

export const tripService = {
    search
};

function search(query) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
    };

    const url = `/api/search_results?query=${query}`
    return axios.get(url).then(response => {
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