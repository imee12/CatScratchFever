import React, { Component } from 'react';
import Header from './common/Header';
import * as actions from '../actions/cats';





export default class Kitten extends Component {

  getTheCats = () => {
    console.log("hello cats");
    this.props.getCats();

  }



  render() {

    //  console.log("these are cat props", this.props);
    //  console.log(this.props.location.pathname);
    //  if (this.props.cats.cats != null) {
    //    console.log("the cat is here");
    //    console.log(this.props.cats.cats[0].data.title);
    //    return (
    //      <div id="mainCat" className="container">
    //        <h1>Main Cat of the Day</h1>
    //         <img src={this.props.cats.cats[0].data.thumbnail} alt=""/>
    //         <h3>{this.props.cats.cats[0].data.title}</h3>
    //      </div>
    //    )
     //
    //  };

    const space = {
      width: '100%',
      color: 'red',
      height: '45px'
    };
    return (
      <div className="container-fluid">
        <div style={space}></div>
          <h2>Get Kittens</h2>
        <button className="btn btn-secondary">Find Kittens</button>
      </div>
    );
  }
}
