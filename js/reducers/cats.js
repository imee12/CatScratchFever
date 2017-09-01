import { handleActions } from 'redux-actions';

import * as actions from '../actions/cats';

const initialState = {
    cats: null
};

export default handleActions({
  [actions.getCatResults]: (state, action) => ({ ...state, cats: action.payload}),
}, initialState)
