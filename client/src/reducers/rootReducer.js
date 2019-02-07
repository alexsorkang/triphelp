import { combineReducers } from 'redux';
import { searchReducer, queryReducer, loaderReducer } from './search';
export default combineReducers({
  queryReducer,
  searchReducer,
  loaderReducer
});