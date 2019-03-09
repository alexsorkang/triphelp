import { combineReducers } from 'redux';
import { searchReducer } from './search';
import { itinerariesReducer, editItineraryReducer, editModeReducer, fetchItineraryReducer } from './itinerary';
import { userReducer, getAllReducer } from './user'
export default combineReducers({
  searchReducer,
  userReducer,
  getAllReducer,
  itinerariesReducer,
  editItineraryReducer,
  fetchItineraryReducer,
  editModeReducer
});