export const search = (query) => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
    };

    // return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
    //     .then(handleResponse)
    //     .then(user => {
    //         // store user details and jwt token in local storage to keep user logged in between page refreshes
    //         localStorage.setItem('user', JSON.stringify(user));

    //         return user;
    //     });

    const url = `/api/search_results?query=${query}`
      axios.get(url).then(response => {
        return data
        // if (response.data.length) {
          // this.props.searchQuery(query, 'success')
        // } else {
          // this.props.searchQuery(query, 'empty')
        // }
        // this.props.searchResults(response.data)
      })
}



function handleResponse(response) {
    return response.data.then(data => {
        // const data = text && JSON.parse(text);
        if (!response.ok) {
            // if (response.status === 401) {
            //     // auto logout if 401 response returned from api
            //     location.reload(true);
            // }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
