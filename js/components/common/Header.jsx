import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => (
      <div className="headerContainer">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="nav navbar-nav">
            <Link className="nav-item left" to="/mainCat">Main Cat</Link>
            <Link className="nav-item left" to="/kittens">Kittens</Link>
              <li className="nav-item left">Cats in Space</li>
              <li className="nav-item left">Cats in Cat City</li>
            <Link className="nav-item right" to="/">
              <div>Cat Home</div>
              <div>
                <i className="fa fa-heart" aria-hidden="true"></i>
              </div>
            </Link>
          </ul>
        </nav>
      </div>
    )

export default Header;
