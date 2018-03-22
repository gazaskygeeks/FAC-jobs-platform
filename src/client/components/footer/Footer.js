import React, { Component } from 'react';

import './FooterStyle.css';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer id='footer'>
          <div className='footer-center'>
            <div className='footer-copy'>
              2018 FAC-Jobs.com © All Rights Reserved. Designed by WYMY
            </div>
          </div>
        </footer>
      </div>
    );

  }
}

export default Footer;
