import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as storeAnswer from '../../actions/storeanswer';
import ButtonNext from '../button/nextBtn';
import ButtonBack from '../button/backBtn';

import './style.css';

class Q3 extends Component {
  constructor() {
    super();
    this.state = {
      skills: ['React.js','Node.js','JavaScript','HTML',
        'CSS','CSS3','HTML5','Express.js','PostgreSQL'],
      mySkills: [],
      message: ''
    };
    this.tech = this.tech.bind(this);
    this.getSkills = this.getSkills.bind(this);
    this.removeSkill = this.removeSkill.bind(this);
    this.inituitList = this.inituitList.bind(this);

  }
  componentDidMount() {
    this.props.storeAnswer({ name: 'skills', value: this.state.mySkills });

  }

  inituitList(char) {
    return this.state.skills.reduce((acc, skill) => {
      if (skill.toUpperCase().includes(char)) {
        acc.push(skill);

        return acc;
      }

      return acc;
    }, []);   
  }

  tech(ev) {
    const datalist = document.getElementById('techList');
    const techs= ev.target.value.toUpperCase();
    //const sameSkills = this.state.skills.filter(skill => skill.startsWith(techs));
    const sameSkills= this.inituitList(techs);
    const childArray = datalist.children;
    let cL = childArray.length;
    while (cL > 0) {
      cL--;
      datalist.removeChild(childArray[cL]);
    }
    sameSkills.map(sameSkill => {
      const option =document.createElement('option');
      option.setAttribute('value', sameSkill);
      datalist.appendChild(option);
    });
  }
  getSkills(ev) {
    ev.preventDefault();
    const techValue=ev.target[0].value;
    if (! this.state.skills.includes(techValue)) {
      this.setState({ message: 'Sorry this skill is not available' });
      ev.target[0].value='';

    } else {
      this.setState({ message: '' });

      if (!this.state.mySkills.includes(techValue)&&this.state.mySkills.length!==5) {
        this.state.mySkills.push(techValue);
        this.props.storeAnswer({ name: 'skills', value: this.state.mySkills });
        ev.target[0].value='';

      } else {

        this.setState({ message: 'Delete one to choose another skill' });
      }

    }

  }
  removeSkill(ev) {
    const skillname = ev.target.id;
    const Skills = this.state.mySkills.filter(skills => skills!==skillname);
    this.setState({ mySkills: Skills });

  }
  render() {

    return (
      <div className='question__container'>
        <div className='q__container'>
          <h1>Tell us your top 5 tech skills</h1>
          <form onSubmit={this.getSkills}>
            <input className='q3__input' type='text'placeholder='Skill (ex: HTML)'
              list = 'techList' onInput={this.tech}/>
            <datalist id = 'techList'>
            </datalist>
          </form>
        </div>
        <div className='myskills_container'>
          <ul className='mySkills_list'>
            {
              this.state.mySkills.length !== 0? (
                this.state.mySkills.map((skill, index) => {
                  return (<li className='mySkill' key={index}>{skill}
                    <i id={skill} onClick={this.removeSkill} className='fa fa-remove'
                      style={{ color: 'red', position: 'absolute',left: '82px',top: '2px' }}></i>
                  </li>);
                })
              ) :<div/>
            }
          </ul>

        </div>
        <h3 style={{ color: 'red' }}>{this.state.message}</h3>
        <div className='buttons'>
          <ButtonBack prevQuestion='Q2'/>
          <ButtonNext nextQuestion='Q4'/>
        </div>
      </div>
    );
  }
}

Q3.propTypes = {
  storeAnswer: PropTypes.func
};
const mapDispatchToProps ={
  storeAnswer: storeAnswer.compilationOfAnswers

};

export default connect(null, mapDispatchToProps)(Q3);
