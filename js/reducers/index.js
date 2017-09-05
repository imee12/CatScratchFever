import { combineReducers } from 'redux';
import cats from './cats'
import kittens from './kittens'

const rootReducer = combineReducers({
  // state: (state = {}) => state
  cats,
  kittens
});

export default rootReducer;
