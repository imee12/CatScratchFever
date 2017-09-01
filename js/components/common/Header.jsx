import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => (
      <div className="headerContainer">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="nav navbar-nav">
            <Link className="nav-item" to="/mainCat">Main Cat</Link>
            <li className="nav-item">General Cats</li>
              <li className="nav-item">Cats in Space</li>
              <li className="nav-item ">Cats in Cat City</li>
            <li className="nav-item right">Cat Home</li>
          </ul>
        </nav>
      </div>
    )

export default Header;
