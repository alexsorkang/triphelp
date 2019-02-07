export const searchResults = results => dispatch => {
 dispatch({
  type: 'SEARCH_RESULTS',
  payload: results
 })
}

export const searchQuery = query => dispatch => {
 dispatch({
   type: 'SEARCH_QUERY',
   payload: query
  })
}

export const loadingStatus = query => dispatch => {
 dispatch({
   type: 'SEARCH_STATUS',
   payload: query
  })
}