import React, { Component } from 'react';
import Header from './common/Header';
import MainCat from './MainCat'




export default class App extends Component {
  render() {
    const space = {
      width: '100%',
      color: 'red',
      height: '45px'
    };
    return (
      <div className="container-fluid">
        {/*// <Header />*/}
      <div style={space}></div>
      <div>What up G Cat</div>
      {this.props.children}
      <MainCat />
      </div>
    );
  }
}
