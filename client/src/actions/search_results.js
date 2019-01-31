// locally save the last search results
export const searchResults = results => dispatch => {
 dispatch({
  type: 'SEARCH_RESULTS',
  payload: results
 })
}