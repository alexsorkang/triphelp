export const itineraryReducer = (state = [], action) => {
  switch (action.type) {
  case 'MY_ITINERARIES':
    return action
  case 'MY_ITINERARIES_SUCCESS':
    return action
  case 'MY_ITINERARIES_ERROR':
    return action
  default:
    return state
  }
}