import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import searchReducer from './search_results';
export default combineReducers({
  simpleReducer,
  searchReducer
});