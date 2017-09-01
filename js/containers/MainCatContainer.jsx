import { connect } from 'react-redux';

import * as actions from '../actions/cats';

import MainCat from '../components/MainCat';


const mapStateToProps = state => ({
  cats: state.cats,
});

const mapDispatchToProps = dispatch => ({
  getCats: () => { dispatch(actions.getRedditCats()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainCat);
//export default connect()(MainCat);
