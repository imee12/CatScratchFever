import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CatEyes from './CatEyes'

// import Button from './common/Button';

export default class Index extends Component {



  checkTheLocation = () => {
    if(this.props.location.pathname === '/') {
      console.log("this is the main cat yo");
      document.querySelector("html").style.backgroundColor = "#161616";
    }


 }
  // static displayName = 'Package Manager Index';
  //
  // static defaultProps = {
  //   color: 'black',
  //   setColor: () => {},
  // };
  //
  // static propTypes = {
  //   color: PropTypes.string,
  //   setColor: PropTypes.func,
  // };
  //
  // handleClick = () => {
  //   const newColor = this.props.color === 'blue' ? 'black' : 'blue';
  //
  //   this.props.setColor(newColor);
  //}

  render() {
    return (
      <div id="indexCat">
        <div onClick={this.checkTheLocation()}className="space20"></div>
        <CatEyes />
      </div>
    );
  }
}
