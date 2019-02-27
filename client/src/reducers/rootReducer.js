import { combineReducers } from 'redux';
import { searchReducer, queryReducer } from './search';
export default combineReducers({
  queryReducer,
  searchReducer
});