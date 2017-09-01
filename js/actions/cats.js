import axios from 'axios';

import { createAction } from 'redux-actions';

export const getCatResults = createAction('CAT_RESULTS');
export const getCatError = createAction('CAT_ERROR');

export const getRedditCats = () => {
  return dispatch => {

    return axios.get('https://www.reddit.com/r/cats.json')
      .then(res => {
        dispatch(getCatResults(res.data));
        console.log(res.data);
      }).catch(err => {
        dispatch(getCatError(err));

      })
  }
}
