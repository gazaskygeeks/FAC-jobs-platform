import React, { Component } from 'react';

import './StudentProfile.css';

class Profile extends Component {
  render() {
    return (
      <div className='wholeStudentContainers'>
        <div className='studentProfile'>
          <div className='studentContainer'>
            <div className='studentImg'>
              <img src='/assets/student.jpg' alt='' />
            </div>
            <div className='studentInfo'>
              <h1 className='studentName'>Yahya Barrawi</h1>
              <p className='studentLocation'>
                <i className='fas fa-map-marker-alt dropbtn'></i>
              Gaza
              </p>
              <p className='studentCohort'>FACG3</p>
              <p className='studentCohort'>FACG3</p>
              <a href='https://github.com/' target='__blank' className='fab fa-github githubbtn'></a>
              <a href='https://www.linkedin.com/' target='__blank' className='fab fa-linkedin inbtn'></a>
            </div>
            <div className='studentContactInfo'>
              <button className='studentState'>Urgent</button>
              <button className='studentPurpose'>Freelancing</button>
              <button className='studentGitter'>
                <a href='https://gitter.im/yahyaHB' target='__blank'>
                  <i className='fab fa-gitter gitterbtn'>  Messege on gitter</i>
                </a>
              </button>
            </div>
          </div>
          <div className='studentSkills'>
            <div className='studentStdHeader'>
              <h1 className='portfolio'>Skills:</h1>
            </div>
            <ul className='studentSkillsList'>
              <li className='studentSingleSkills'><a>HTML5</a></li>
              <li className='studentSingleSkills'><a>HTML5</a></li>
              <li className='studentSingleSkills'><a>HTML5</a></li>
              <li className='studentSingleSkills'><a>HTML5</a></li>
              <li className='studentSingleSkills'><a>HTML5</a></li>
            </ul>
          </div>
          <div className='studentSkills'>
            <div className='studentStdHeader'>
              <h1 className='portfolio'>Portolio:</h1>
              <i className='fas fa-plus-circle addbtn'></i>
            </div>
            <ul className='studentSkillsList'>
              <li className='studentSingleSkills'><a>HTML5</a></li>
              <li className='studentSingleSkills'><a>HTML5</a></li>
              <li className='studentSingleSkills'><a>HTML5</a></li>
              <li className='studentSingleSkills'><a>HTML5</a></li>
              <li className='studentSingleSkills'><a>HTML5</a></li>
            </ul>
          </div>
          <div className='studentSkills'>
            <div className='studentStdHeader'>
              <h1 className='portfolio'>Projects Links:</h1>
              <i className='fas fa-plus-circle addbtn'></i>
            </div>
            <ul className='studentSkillsList'>
              <li className='studentSingleSkills'><a>HTML5</a></li>
              <li className='studentSingleSkills'><a>HTML5</a></li>
              <li className='studentSingleSkills'><a>HTML5</a></li>
              <li className='studentSingleSkills'><a>HTML5</a></li>
              <li className='studentSingleSkills'><a>HTML5</a></li>
            </ul>
          </div>
          <div className='studentSkills'>
            <div className='studentStdHeader'>
              <h1 className='portfolio'>C.V.:</h1>
              <i className='fas fa-plus-circle addbtn'></i>
            </div>
            <ul className='studentSkillsList'>
              <li className='studentSingleSkills'><a>HTML5</a></li>
              <li className='studentSingleSkills'><a>HTML5</a></li>
              <li className='studentSingleSkills'><a>HTML5</a></li>
              <li className='studentSingleSkills'><a>HTML5</a></li>
              <li className='studentSingleSkills'><a>HTML5</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
