import { connect } from 'react-redux';

import * as actions from '../actions/kittens';

import Kitten from '../components/Kitten';


const mapStateToProps = state => ({
  kittens: state.kittens,
});

const mapDispatchToProps = dispatch => ({
//  getCats: () => { dispatch(actions.getRedditCats()); },
getKittens: () => {dispatch(actions.getRedditKittens()); },
//getKit: () => {dispatch(actions.getKittenResults());  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Kitten);
//export default connect()(MainCat);
