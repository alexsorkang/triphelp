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
    itineraryService.fetch_itinerary(itinerary_id)
      .then(
        itineraries => {
          dispatch(success(itineraries));
        },
        error => {
          dispatch(failure(error));
        }
      );
  };

  function request(itinerary) { return { type: 'FETCH_ITINERARY', itinerary } }
  function success(itinerary) { return { type: 'FETCH_ITINERARY_SUCCESS', itinerary } }
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

export const dragPlace = (itinerary_id,src,dest,src_order,dest_order,place) => {
  return dispatch => {
    dispatch(request())
    itineraryService.drag_place(itinerary_id,src,dest,src_order,dest_order,place)
      .then(
        error => {
          dispatch(failure(error));
        }
      );

  };

  function request() { return { type: 'DRAG_PLACE' } }
  function failure(error) { return { type: 'DRAG_PLACE_ERROR', error } }
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

  function request(name, itinerary) { return { type: 'EDIT_ITINERARY', itinerary } }
  function success(name, itinerary) { return { type: 'EDIT_ITINERARY_SUCCESS', itinerary } }
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
