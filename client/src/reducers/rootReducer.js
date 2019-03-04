import { combineReducers } from 'redux';
import { searchReducer } from './search';
import { itineraryReducer, editItineraryReducer, fetchItineraryReducer } from './itinerary';
import { userReducer, getAllReducer } from './user'
export default combineReducers({
  searchReducer,
  userReducer,
  getAllReducer,
  itineraryReducer,
  editItineraryReducer,
  fetchItineraryReducer
});