import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const CatEyes = () => (
  <div id="indexCat">
    <h2 className="animate-flicker">Are you looking for cats?</h2>
      <div className="space20"></div>
        <div className="catContainer animate-flicker2">
          <div className="cat">
            <div className="ear ear--left"></div>
            <div className="ear ear--right"></div>
          <div className="face">
        <div className="eye eye--left">
          <div className="eye-pupil"></div>
            </div>
          <div className="eye eye--right">
        <div className="eye-pupil"></div>
      </div>
        <div className="muzzle"></div>
          </div>
            </div>
          </div>
{/*<h2 className="animate-flicker2">Are you looking for cats?</h2>
  <div className="catContainer2 animate-flicker10">
  <div className="cat">
    <div className="ear ear--left"></div>
     <div className="ear ear--right"></div>
       <div className="face">
  <div className="eye eye--left">
  <div className="eye-pupil"></div>
  </div>
  <div className="eye eye--right">
  <div className="eye-pupil"></div>
  </div>
  <div className="muzzle"></div>
  </div>
  </div>
  </div>*/}

  </div>
    )

export default CatEyes;
