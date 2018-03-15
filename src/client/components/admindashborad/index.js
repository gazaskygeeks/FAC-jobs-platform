import React, { Component } from 'react';

import './index.css';

class Admindashborad extends Component {
  render() {
    return (
      <div className='admindashborad'>
        <div className='admindashborad__container'>
          <div className='admindashborad__allstudents'>
            <div className='student'>
              <img className='student__img' src='./assets/student.png' />
              <div className='student__info'>
                <div className='student__name'>Walaa M.</div>
                <div className='student__job'>Full Stack Developer</div>
                <div className='student__skills'><span className='student__span'>Skills: </span>
                Node.js, HTML5, CSS3
                </div>
                <div className='student__campus'><span className='student__span'>Campus: </span>
                FACG3
                </div>
                <div className='student__interest'><span className='student__span'>Interest: </span>
                Freelancing
                </div>
              </div>
              <div className='student__status'>
                <div className='student__circle'></div>
                <input className='student__view' type='submit'/>
              </div>
            </div>
          </div>
          <div className='admindashborad__filter'>

          </div>
        </div>
      </div>
    );
  }
}

export default Admindashborad;
