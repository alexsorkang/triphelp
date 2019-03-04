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

export const editItineraryReducer = (state = [], action) => {
  switch (action.type) {
  case 'EDIT_ITINERARY':
    return action
  case 'EDIT_ITINERARY_SUCCESS':
    return action
  case 'EDIT_ITINERARY_ERROR':
    return action
  default:
    return state
  }
}

export const fetchItineraryReducer = (state = [], action) => {
  switch (action.type) {
  case 'FETCH_ITINERARY':
    return action
  case 'FETCH_ITINERARY_SUCCESS':
    return action
  case 'FETCH_ITINERARY_ERROR':
    return action
  default:
    return state
  }
}