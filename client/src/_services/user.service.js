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
    axios.post(url, {'user': { email, password }}).then(response => {
      if (response.status === 200) {
        let store = JSON.stringify({email: response.data.email, auth: response.headers.authorization})
        localStorage.setItem('user', store);
        return store
      } else {
        signOut()
        window.location.reload(true)
      }
    }).catch(function (error) {
      console.log(error)
      window.location.reload(true)
    });

    // return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
    //     .then(handleResponse)
    //     .then(user => {
    //         // store user details and jwt token in local storage to keep user logged in between page refreshes
    //         localStorage.setItem('user', JSON.stringify(user));

    //         return user;
    //     });
}

function signOut() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
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
    return response.text().then(text => {
        console.log(text)
        // const data = text && JSON.parse(text);
        // if (!response.ok) {
        //     if (response.status === 401) {
                // auto logout if 401 response returned from api
            //     logout();
            //     location.reload(true);
            // }

        //     const error = (data && data.message) || response.statusText;
        //     return Promise.reject(error);
        // }

        // return data;
    });
}
