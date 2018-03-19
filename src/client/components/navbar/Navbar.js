import React, { Component } from 'react';

import './navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className='logo'>
          <img src='/assets/logo.png' className='logo' alt='star' />
        </div>
        <div>
          <i className='far fa-bell bell'></i>
          <div className='dropdown'>
            <i className='fas fa-sliders-h dropbtn'></i>
            <div className='dropdown-content'>
              <a href='#'>Settings
              <i className='fas fa-cog settings'></i></a>
              <a href='#'>Logout
              <i className='fas fa-sign-out-alt settings'></i></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
