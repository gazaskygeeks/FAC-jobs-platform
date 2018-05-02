import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as updatedata from '../../actions/settingsData';

import './style.css';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state={ display_name: '',interests: '',skills: '',email: '',profile_url: '' ,expanded: false };
    this.handleEditDispllayName = this.handleEditDispllayName.bind(this);
    this.handleEditEmail = this.handleEditEmail.bind(this);
    this.showCheckboxes = this.showCheckboxes.bind(this);
    this.showCheckboxes2 = this.showCheckboxes2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.studentData.map(item => {
      this.setState({
        display_name: item.display_name,interests: item.interests,
        skills: item.skills,email: item.email,
        profile_url: item.profile_url });

    });

  }
  handleEditDispllayName(e) {
    const setting_input_btn = document.getElementById('setting_input_btn');
    const editIcon = document.getElementById('editIcon');
    const span = document.getElementById('span');
    const editInput = document.createElement('input');
    const key = setting_input_btn.className;
    if (e.target.id === 'edit') {
      editInput.id='saveinput';
      editInput.autofocus = true;
      editInput.value = span.textContent;
      setting_input_btn.insertBefore(editInput, span);
      span.classList.add('hidden');
      e.target.id = 'save';
      editIcon.className = 'fa fa-check iconStyle';

    } else {
      const input = document.getElementById('saveinput');
      input.autofocus = true;
      e.target.id = 'edit';
      editIcon.className = 'fa fa-pencil iconStyle';
      this.setState({ [key]: input.value });
      span.classList.remove('hidden');

      input.remove();
    }
  }
  handleEditEmail(e) {
    const setting_input_btn = document.getElementById('setting_input_btn2');
    const editIcon = document.getElementById('editIcon2');
    const span = document.getElementById('span2');
    const editInput = document.createElement('input');
    const key = setting_input_btn.className;
    if (e.target.id === 'edit') {
      editInput.id='saveinput';
      editInput.autofocus = true;
      editInput.value = span.textContent;
      setting_input_btn.insertBefore(editInput, span);
      span.classList.add('hidden');
      e.target.id = 'save';
      editIcon.className = 'fa fa-check iconStyle';

    } else {
      const input = document.getElementById('saveinput');
      input.autofocus = true;
      e.target.id = 'edit';
      editIcon.className = 'fa fa-pencil iconStyle';
      this.setState({ [key]: input.value });
      span.classList.remove('hidden');

      input.remove();
    }
  }
  showCheckboxes() {
    const checkboxes=document.getElementById('checkboxes');
    const editIcon=document.getElementById('editIconInterest');
    if (!this.state.expanded) {
      editIcon.className = 'fa fa-check iconStyle';
      checkboxes.style.display='block';
      this.setState({ expanded: true });

    } else {
      const checkbox = document.getElementsByName('interest');
      const arr = Array.prototype.slice.call(checkbox).filter(e => {
        return e.checked;
      }); ;
      const interesting = arr.map(e => {
        return e.value;
      });
      editIcon.className = 'fa fa-pencil iconStyle';
      checkboxes.style.display='none';
      this.setState({ expanded: false, interests: interesting });
    }
  }
  showCheckboxes2() {
    const checkboxes=document.getElementById('checkboxes2');
    const editIcon=document.getElementById('editIconSkills');
    if (!this.state.expanded) {
      editIcon.className = 'fa fa-check iconStyle';
      checkboxes.style.display='block';
      this.setState({ expanded: true });

    } else {
      const checkbox = document.getElementsByName('skills');
      const arr = Array.prototype.slice.call(checkbox).filter(e => {
        return e.checked;
      }); ;
      const skills = arr.map(e => {
        return e.value;
      });
      editIcon.className = 'fa fa-pencil iconStyle';
      checkboxes.style.display='none';
      this.setState({ expanded: false, skills });
    }
  }
  handleSubmit() {
    this.props.updatedata(this.state);
  }
  render() {
    const staticInterests=['Freelancing','Mentoring','CFing','Contracts'];
    const staticSkills=['React.js','Node.js','JavaScript','HTML','CSS','CSS3','HTML5','Express.js','PostgreSQL'];
    const interests = staticInterests.map((interest,i) => {
      return <label key={i} htmlFor={interest}>
        <input name='interest' type='checkbox' id={interest} value={interest} />
        {interest}</label>;

    });
    const skills = staticSkills.map((skill,i) => {
      return <label key={i} htmlFor={skill}>
        <input name='skills' type='checkbox' id={skill} value={skill} />
        {skill}</label>;

    });

    return (
      (this.props.update.success.ok)?
        (<Redirect
          to={{ pathname: `/profile/${this.props.studentData[0].username}` }}
        />)
        :
        <div id='setting' className='setting' >
          <div className='setting__nav'>
            <img src='./assets/logo.png'/>
            <h1>Founders & Coders</h1>
          </div>
          <div className='setting__container'>
            <h1>Edit your Profile</h1>
            <div className='big__container'>
              <div className='container__left'>
                <div className='setting_names'>
                  <div>Display name / </div>
                  <div>Interests / </div>
                  <div>Skills / </div>
                </div>
                <div className='setting_names'>
                  <div id='setting_input_btn' className='display_name'>
                    <span id='span'>{this.state.display_name}</span>
                    <button id='edit' className='setting_edit' onClick={this.handleEditDispllayName}>
                      <i id='editIcon' className='fa fa-pencil iconStyle'></i>
                    </button>
                  </div>
                  <div id='setting_input_btn1' className='display_name'>
                    <span id='span'>My interests</span>
                    <button id='edit' className='setting_edit' onClick={this.showCheckboxes}>
                      <i id='editIconInterest' className='fa fa-pencil iconStyle'></i>
                    </button>
                    <div className='setting_multiselect'>
                      <div className='setting_checkboxes' id='checkboxes'>
                        {interests}
                      </div>
                    </div>

                  </div>
                  <div id='setting_input_btn1' className='display_name'>
                    <span id='span'>My skills</span>
                    <button id='edit' className='setting_edit' onClick={this.showCheckboxes2}>
                      <i id='editIconSkills' className='fa fa-pencil iconStyle'></i>
                    </button>
                    <div className='setting_multiselect'>
                      <div className='setting_checkboxes' id='checkboxes2'>
                        {skills}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className='container__right'>
                <div id='setting_input_btn2' className='email'>
                  {
                    (this.state.email!=='')?
                      <span id='span2'>{this.state.email}</span>
                      :
                      <span id='span2'>You don\t have email yet</span>

                  }
                  <button id='edit' className='setting_edit' onClick={this.handleEditEmail}>
                    <i id='editIcon2' className='fa fa-pencil iconStyle'></i>
                  </button>

                </div>
                <div className='social__links__setting'><h3>
                Social Links </h3><img src='./assets/plus.png'/></div>
                <input id='profile_url' className='setting__input github__URL'
                  type='url' placeholder={this.state.profile_url}/>
                <input id='social_links' className='setting__input' type='url' />

              </div>
            </div>
            <div className='setting__btn__div'>
              <input type='submit' value='Save'
                className='settings__save__btn' onClick={this.handleSubmit}/>
            </div>
          </div>
          <div/>
        </div>
    );

  }
}

Settings.propTypes = {
  studentData: PropTypes.array,
  updatedata: PropTypes.fun,
  update: PropTypes.obj };

const mapStateToProps = state => {
  return {
    update: state.updatedata
  };
};
const mapDispatchToProps = {
  updatedata: updatedata.UpdateDataUser
};
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
