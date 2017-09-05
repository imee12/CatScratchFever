import { handleActions } from 'redux-actions';

import * as actions from '../actions/cats';

const initialState = {
    cats: null,
    kittens: null
};

export default handleActions({
  [actions.getCatResults]: (state, action) => ({ ...state, cats: action.payload}),
}, initialState)
