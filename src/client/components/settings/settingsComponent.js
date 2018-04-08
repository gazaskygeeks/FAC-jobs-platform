import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as updatedata from '../../actions/settingsData';

import './style.css';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getData = this.getData.bind(this);
  }
  getData(id) {
    return document.getElementById(id).value;
  }
  handleSubmit() {
    console.log(this.getData('username'));
    const data ={ username: this.getData('username'),campus: this.getData('campus'),
      cohort: this.getData('cohort'),interests: this.getData('interests'),skills: this.getData('skills'),
      email: this.getData('email'),profile_url: this.getData('profile_url'),
      social_links: this.getData('social_links')
    };
    this.props.updatedata(data);
  }
  render() {
    if (!this.props.studentData)

      return <div />;
    const arr = this.props.studentData.map(item => {
      return (
        <div id='setting' className='setting' key={item.id}>
          <div className='setting__nav'>
            <img src='./assets/logo.png'/>
            <h1>Founders & Coders</h1>
          </div>
          <div className='setting__container'>
            <h1>Edit your Profile</h1>
            <div className='big__container'>
              <div className='container__left'>
                <input id='username' className='setting__input' type='text' placeholder={item.username}/>
                <input id='campus' className='setting__input' type='text' placeholder={item.campus}/>
                <input id='cohort' className='setting__input' type='text' placeholder={item.cohort}/>
                <input id='interests' className='setting__input' type='text' placeholder={item.interests}/>
                <input id='skills' className='setting__input' type='text' placeholder={item.skills}/>
              </div>
              <div className='container__right'>
                {
                  (!item.email)?
                    <input id='email' className='setting__input' type='email' placeholder='You Do not Submit email yet' />
                    :
                    <input id='email' className='setting__input' type='email' placeholder={item.email} />
                }
                <div className='social__links__setting'><h3>Social Links </h3><img src='./assets/plus.png'/></div>
                <input id='profile_url' className='setting__input github__URL' type='url' placeholder={item.profile_url}/>
                <input id='social_links' className='setting__input' type='url' />

              </div>
            </div>
            <div className='setting__btn__div'>
              <input type='submit' value='Save' className='settings__save__btn' onClick={this.handleSubmit}/>
            </div>
          </div>
          <div/>
        </div>
      );
    });

    return (
      <div className='studenProfileStyle'>
        {arr}
      </div>
    );
  }
}

Settings.propTypes = {
  studentData: PropTypes.array,
  updatedata: PropTypes.fun };

const mapDispatchToProps = {
  updatedata: updatedata.UpdateDataUser
};
export default connect(null, mapDispatchToProps)(Settings);
