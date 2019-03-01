import { combineReducers } from 'redux';
import { searchReducer, queryReducer } from './search';
import { userReducer, getAllReducer } from './user'
export default combineReducers({
  searchReducer,
  userReducer,
  getAllReducer
});