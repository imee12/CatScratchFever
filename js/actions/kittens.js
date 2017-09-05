import axios from 'axios';

import { createAction } from 'redux-actions';

export const getKittenResults = createAction('KITTEN_RESULTS');
export const getKittenError = createAction('KITTEN_ERROR');

export const getRedditKittens = () => {
  return dispatch => {

    return axios.get('https://www.reddit.com/r/kittens.json')
    // .then(res => dispatch(res.data.children.map(child => child.data)))

      .then(res => {
        // dispatch(getCatResults(res.data.data.children.map(child => child.data)));
          dispatch(getKittenResults(res.data.data.children));
        //  this.setState({kittens: res.data.data.children});


        // dispatch(getCatResults(res.data.data.children));
        console.log(res.data.data.children);
        // const catData = res.data;
        // for ( i = 0; i < catData.length)


      }).catch(err => {
        dispatch(getKittenError(err));

      })
  }
}
