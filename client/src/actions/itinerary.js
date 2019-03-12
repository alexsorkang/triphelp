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

export const fetchItinerary = (itinerary_id) => {
  return dispatch => {




    const getItems = (count, offset = 0) =>
      Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `item-${k + offset}`,
        name: `item ${k + offset}`
      }));
    const a = [{name: 'section-1', items: getItems(5)}, {name: 'section-2', items: getItems(5,5)}, {name: 'section-3', items: getItems(5,10)}]
    // console.log(a)





    dispatch(request('trip name', a))


    itineraryService.fetch_itinerary(itinerary_id)
      .then(
        itineraries => {
          // dispatch(success(itineraries));
        },
        error => {
          // dispatch(failure(error));
        }
      );
  };

  function request(name, itinerary) { return { type: 'FETCH_ITINERARY', name, itinerary } }
  function success(name, itinerary) { return { type: 'FETCH_ITINERARY_SUCCESS', name, itinerary } }
  function failure(error) { return { type: 'FETCH_ITINERARY_ERROR', error } }
}

export const editMode = (mode) => {
  return dispatch => {
    dispatch(request(mode))
  };

  function request(mode) { return { type: 'EDIT_MODE', mode } }
}

// all actions below handle all the edit actions
// drag action
// edit detail action
// add/delete action

export const dragItinerary = (name, itinerary) => {
  return dispatch => {
    dispatch(request(name, itinerary))

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

  function request(name, itinerary) { return { type: 'EDIT_ITINERARY', name, itinerary } }
  function success(name, itinerary) { return { type: 'EDIT_ITINERARY_SUCCESS', name, itinerary } }
  function failure(error) { return { type: 'EDIT_ITINERARY_ERROR', error } }
}

export const editItinerary = (name, itinerary) => {
  return dispatch => {
    dispatch(request(name, itinerary))

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

  function request(name, itinerary) { return { type: 'EDIT_ITINERARY', name, itinerary } }
  function success(name, itinerary) { return { type: 'EDIT_ITINERARY_SUCCESS', name, itinerary } }
  function failure(error) { return { type: 'EDIT_ITINERARY_ERROR', error } }
}

export const editSection = (name, itinerary) => {
  return dispatch => {
    dispatch(request(name, itinerary))

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

  function request(name, itinerary) { return { type: 'EDIT_ITINERARY', name, itinerary } }
  function success(name, itinerary) { return { type: 'EDIT_ITINERARY_SUCCESS', name, itinerary } }
  function failure(error) { return { type: 'EDIT_ITINERARY_ERROR', error } }
}

export const editPlace = (name, itinerary) => {
  return dispatch => {
    dispatch(request(name, itinerary))

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

  function request(name, itinerary) { return { type: 'EDIT_ITINERARY', name, itinerary } }
  function success(name, itinerary) { return { type: 'EDIT_ITINERARY_SUCCESS', name, itinerary } }
  function failure(error) { return { type: 'EDIT_ITINERARY_ERROR', error } }
}

export const addItinerary = (name, itinerary) => {
  return dispatch => {
    dispatch(request(name, itinerary))

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

  function request(name, itinerary) { return { type: 'EDIT_ITINERARY', name, itinerary } }
  function success(name, itinerary) { return { type: 'EDIT_ITINERARY_SUCCESS', name, itinerary } }
  function failure(error) { return { type: 'EDIT_ITINERARY_ERROR', error } }
}

export const deleteItinerary = (name, itinerary) => {
  return dispatch => {
    dispatch(request(name, itinerary))

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

  function request(name, itinerary) { return { type: 'EDIT_ITINERARY', name, itinerary } }
  function success(name, itinerary) { return { type: 'EDIT_ITINERARY_SUCCESS', name, itinerary } }
  function failure(error) { return { type: 'EDIT_ITINERARY_ERROR', error } }
}
