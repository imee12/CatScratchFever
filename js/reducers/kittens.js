import { handleActions } from 'redux-actions';

import * as actions from '../actions/kittens';

const initialState = {
    kittens: null
};

export default handleActions({
  [actions.getKittenResults]: (state, action) => ({ ...state, kittens: action.payload}),
}, initialState)
