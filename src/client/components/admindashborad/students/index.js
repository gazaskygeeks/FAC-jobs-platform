import React, { Component } from 'react';

import './style.css';
import PropTypes from 'prop-types';

class Students extends Component {
  constructor(props) {
    super(props);
    this._handleCircleColor = this._handleCircleColor.bind(this);

  }
  _handleCircleColor(status) {
    const objColor = { backgroundColor: '' };
    (status === 'Urgent')?
      objColor.backgroundColor = '#e74c3c':
      (status==='Kind Of')?
        objColor.backgroundColor = '#2ecc71' :
        objColor.backgroundColor = '#3498db';

    return objColor;
  }
  render() {
    const arrayOfSkills = this.props.dataStudent.skills;

    return (
      <div className='student'>
        <div className='students__container'>

          <div className='student__divImg'>
            <img className='student__img' src={this.props.dataStudent.avatar} />
          </div>
          <div className='student__info'>
            <div className='student__name'>{this.props.dataStudent.username}</div>
            <div className='student__job student__span'>Full Stack Developer</div>
            <div><span className='student__span'>Skills: </span>
              {
                arrayOfSkills.map((skill,i) => {
                  if (i !== arrayOfSkills.length-1) {
                    return `${skill}, `;
                  } else {
                    return `${skill}`;
                  }
                })
              }
            </div>
            <div><span className='student__span'>Cohrot: </span>
              {this.props.dataStudent.cohort}
            </div>
            <div ><span className='student__span'>Campus: </span>
              {this.props.dataStudent.campus}
            </div>
            <div><span className='student__span'>Interest: </span>
              {this.props.dataStudent.interests}
            </div>
          </div>
        </div>
        <div className='student__status'>
          <div className='student__circle' title={this.props.dataStudent.status}
            style={this._handleCircleColor(this.props.dataStudent.status)}></div>
          <a href={`/profile/${this.props.dataStudent.id}`}>
            <input className='student__view' type='submit' value='View'></input>
          </a>
        </div>

      </div>
    );
  }
}

Students.propTypes = {
  dataStudent: PropTypes.array
};

export default Students;
