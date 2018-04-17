import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
const Page404 = () => {
  return (
    <div className='page404'>
      <div className='page404__404'>404</div>
      <div className='page404__text'>
          Oops! The Page you requested was not found!
      </div>
      <Link to='/'> Return Home Page</Link>
    </div>
  );
};

export default Page404;
