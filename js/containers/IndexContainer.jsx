import { connect } from 'react-redux';

// import * as actions from '../actions/cats';

import Index from '../components/Index';

// const mapStateToProps = state => ({
//   color: state.ui.color,
// });
//
// const mapDispatchToProps = dispatch => ({
//   setColor: (color) => { dispatch(actions.setColor(color)); },
// });

//export default connect(mapStateToProps, mapDispatchToProps)(Index);
export default connect()(Index);
