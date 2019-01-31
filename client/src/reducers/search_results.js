export default (state = {}, action) => {
  switch (action.type) {
  case 'SEARCH_RESULTS':
    return {
     result: action.payload
    }
  default:
    return state
  }
}