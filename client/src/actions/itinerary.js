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
        name: `item ${k + offset}`
      }));
    const a = [{name: 'section-1', items: getItems(5)}, {name: 'section-2', items: getItems(5,5)}, {name: 'section-3', items: getItems(5,10)}]
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