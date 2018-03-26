import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Profile from './StudentProfile/StudentProfile.js';

class StudentProfile extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Profile />
        <Footer />
      </div>
    );
  }
}

export default StudentProfile;
