import { itineraryService } from '../_services/itinerary.service'

export const search = (query, status) => dispatch => {
  dispatch(request(query))
  itineraryService.search(query).then(response => {
    dispatch(success(query, response))
  }, error => {
    dispatch(failure(query, error))
  })

  function request(query) { return { type: 'SEARCH', query: query} }
  function success(query, results) { return { type: 'SEARCH_SUCCESS', query: query, results} }
  function failure(query, error) { return { type: 'SEARCH_ERROR', query: query, error} }
}