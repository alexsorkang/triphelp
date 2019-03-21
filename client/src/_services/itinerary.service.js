import axios from 'axios';
import { authHeader } from '../_helpers/auth-header';

export const itineraryService = {
    my_itineraries,
    fetch_itinerary,
    drag_place,
    drag_section
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
      console.log(response.error)
      return Promise.reject(response.error)
    }
  }, 
  error => {
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
    if (response.status === 200) {
      return response.data
    } else {
      console.log(response.error)
      return Promise.reject(response.error)
    }
  }, 
  error => {
    console.log(error)
    return Promise.reject(error)
  })
}

function drag_place(id,src,dest,src_order,dest_order,place) {
  const requestOptions = {
      headers: {
                  'Content-Type': 'application/json',
                  'Authorization': authHeader()
               }
  };
  const url = `/api/drag_place`
  return axios.patch(url, {id,src,dest,src_order,dest_order,place}, requestOptions).then(response => {
    if (response.status === 200) {
      return response.data
    } else {
      console.log(response.error)
      return Promise.reject(response.error)
    }
  }, 
  error => {
    console.log(error)
    return Promise.reject(error)
  })
}

function drag_section(id,order) {
  const requestOptions = {
      headers: {
                  'Content-Type': 'application/json',
                  'Authorization': authHeader()
               }
  };
  const url = `/api/drag_section`
  return axios.patch(url, {id,order}, requestOptions).then(response => {
    if (response.status === 200) {
      return response.data
    } else {
      console.log(response.error)
      return Promise.reject(response.error)
    }
  }, 
  error => {
    console.log(error)
    return Promise.reject(error)
  })
}


// function signIn(email, password) {
//     // curl -XPOST -H 'Content-Type: application/json' http://localhost:3001/login -d '{"user": {"email": "test@test.com", "password": "password" }}'
//     const url = `/login`
//     return axios.post(url, {'user': { email, password }})
//       .then(response => {
//         if (response.status === 200) {
//           let store = JSON.stringify({email: response.data.email, auth: response.headers.authorization})
//           localStorage.setItem('user', store);
//           return store
//         } else {
//           signOut()
//           window.location.reload(true)
//           const error = response.error
//           return Promise.reject(error);
//         }
//       }, error => {
//         signOut()
//         console.log(error)
//         return Promise.reject(error);
//     })
// }