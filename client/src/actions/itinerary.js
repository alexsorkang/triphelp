import { itineraryService } from '../_services/itinerary.service'
import { history } from '../_helpers/history';

export const myItineraries = (email, password) => {
  return dispatch => {
    dispatch(request());

    itineraryService.my_itineraries()
      .then(
        itineraries => {
          dispatch(success(itineraries));
        },
        error => {
          dispatch(failure(error));
        }
      );
  };

  function request() { return { type: 'MY_ITINERARIES' } }
  function success(itineraries) { return { type: 'MY_ITINERARIES_SUCCESS', itineraries } }
  function failure(error) { return { type: 'MY_ITINERARIES_ERROR', error } }
}

export const editItinerary = (itinerary) => {
  return dispatch => {
    console.log(itinerary)
    dispatch(request(itinerary))

    // itineraryService.my_itineraries()
    //   .then(
    //     itineraries => {
    //       dispatch(success(itineraries));
    //     },
    //     error => {
    //       dispatch(failure(error));
    //     }
    //   );
  };

  function request(itinerary) { return { type: 'EDIT_ITINERARY', itinerary } }
  function success(itinerary) { return { type: 'EDIT_ITINERARY_SUCCESS', itinerary } }
  function failure(error) { return { type: 'EDIT_ITINERARY_ERROR', error } }
}

export const fetchItinerary = (itinerary) => {
  return dispatch => {

    const getItems = (count, offset = 0) =>
      Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `item-${k + offset}`,
        content: `item ${k + offset}`
      }));
    const a = getItems(10)
    dispatch(request(a))

    // itineraryService.my_itineraries()
    //   .then(
    //     itineraries => {
    //       dispatch(success(itineraries));
    //     },
    //     error => {
    //       dispatch(failure(error));
    //     }
    //   );
  };

  function request(itinerary) { return { type: 'FETCH_ITINERARY', itinerary } }
  function success(itinerary) { return { type: 'FETCH_ITINERARY_SUCCESS', itinerary } }
  function failure(error) { return { type: 'FETCH_ITINERARY_ERROR', error } }
}