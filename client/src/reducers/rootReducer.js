import { combineReducers } from 'redux';
import { searchReducer } from './search';
import { itineraryReducer } from './itinerary';
import { userReducer, getAllReducer } from './user'
export default combineReducers({
  searchReducer,
  userReducer,
  getAllReducer,
  itineraryReducer
});