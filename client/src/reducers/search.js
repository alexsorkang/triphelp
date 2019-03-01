export const searchReducer = (state = [], action) => {
  switch (action.type) {
  case 'SEARCH':
    return action
  case 'SEARCH_SUCCESS':
    return action
  case 'SEARCH_ERROR':
    return action
  default:
    return state
  }
}