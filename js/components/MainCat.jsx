import React, { Component } from 'react';
import Header from './common/Header';
import * as actions from '../actions/cats';






export default class MainCat extends Component {

  // static defaultProps = {
  //   getRedditCats: actions.getRedditCats()
  // }
  getTheCats = () => {
    console.log("hello cats");
    this.props.getCats();

  }

  render() {
    console.log(this.props);

    const space = {
      width: '100%',
      color: 'red',
      height: '45px'
    };
    return (
      <div className="container-fluid">
        <div style={space}></div>
        <div>This is the main cat</div>
        <button onClick={this.getTheCats}>Find Some Cats</button>
      </div>
    );
  }
}
