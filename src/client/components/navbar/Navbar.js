import React, { Component } from 'react';
import Sort from '../admindashborad/sort';

import './navbar.css';

class Navbar extends Component {

  constructor(props){
    super(props);

  }
  render() {
    console.log(this.props,'Naaav props');

    return (
      <div>
        <div className='navbar'>
          <div className='logo'>
            <img src='/assets/logo.png' className='logo' alt='star' />
          </div>
          <Sort students={this.props}/>
          <div className='rightSideNav'>
            <i className='far fa-bell bell'></i>
            <div className='dropdown'>
              <i className='fas fa-sliders-h dropbtn'></i>
              <div className='dropdown-content'>
                <a onClick={this.handleSubmit}>Settings
                  <i className='fas fa-cog settings'></i></a>
                <a href='#'>Logout
                  <i className='fas fa-sign-out-alt settings'></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
