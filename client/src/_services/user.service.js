import { authHeader } from '../_helpers/auth-header';
import axios from 'axios';

export const userService = {
    signIn,
    signOut,
    getAll
};

function signIn(email, password) {
    // curl -XPOST -H 'Content-Type: application/json' http://localhost:3000/login -d '{"user": {"email": "test@test.com", "password": "password" }}'
    const url = `/login`
    return axios.post(url, {'user': { email, password }})
      .then(response => {
        if (response.status === 200) {
          let store = JSON.stringify({email: response.data.email, auth: response.headers.authorization})
          localStorage.setItem('user', store);
          return store
        } else {
          signOut()
          window.location.reload(true)
          const error = response.error
          return Promise.reject(error);
        }
      }, error => {
        signOut()
        // window.location.reload(true)
        console.log(error)
    })
}

function signOut() {
    localStorage.removeItem('user')
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/users`, requestOptions)
    // .then(handleResponse);
}

function handleResponse(response) {
  console.log(response)
  if (response.status !== 200) {
    signOut()
    window.location.reload(true)
    const error = response.error
    return Promise.reject(error);
  }
  return response

}
