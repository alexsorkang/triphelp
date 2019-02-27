export const searchResults = results => dispatch => {
 dispatch({
  type: 'SEARCH_RESULTS',
  payload: results
 })
}

export const searchQuery = (query, status) => dispatch => {
  dispatch({
    type: 'SEARCH_QUERY',
    payload: {query: query, status: status}
  })
}