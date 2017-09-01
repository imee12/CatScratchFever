import { connect } from 'react-redux';

import * as actions from '../actions/cats';

import Kitten from '../components/Kitten';


const mapStateToProps = state => ({
  kittens: state.kittens,
});

const mapDispatchToProps = dispatch => ({
//  getCats: () => { dispatch(actions.getRedditCats()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Kitten);
//export default connect()(MainCat);
