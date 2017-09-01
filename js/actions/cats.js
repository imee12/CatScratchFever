import axios from 'axios';

import { createAction } from 'redux-actions';

export const getCatResults = createAction('CAT_RESULTS');
export const getCatError = createAction('CAT_ERROR');

export const getRedditCats = () => {
  return dispatch => {

    return axios.get('https://www.reddit.com/r/cats.json')
    // .then(res => dispatch(res.data.children.map(child => child.data)))

      .then(res => {
        // dispatch(getCatResults(res.data.data.children.map(child => child.data)));
          dispatch(getCatResults(res.data.data.children));

        // dispatch(getCatResults(res.data.data.children));
        console.log(res.data.data.children);
        // const catData = res.data;
        // for ( i = 0; i < catData.length)


      }).catch(err => {
        dispatch(getCatError(err));

      })
  }
}
