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