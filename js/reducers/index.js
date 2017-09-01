import { combineReducers } from 'redux';
import cats from './cats'

const rootReducer = combineReducers({
  // state: (state = {}) => state
  cats
});

export default rootReducer;
