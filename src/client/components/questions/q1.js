import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as storeAnswer from '../../actions/storeanswer';
import ButtonNext from '../button/nextBtn';
import './style.css';

class Q1 extends Component {
  constructor(props) {
    super(props);

    this.handleSelectCompus = this.handleSelectCompus.bind(this);
    this.handleSelectChort = this.handleSelectChort.bind(this);
  }

  handleSelectCompus(event) {
    const compus= event.target.value;
    const gaza=document.getElementsByName('gaza');
    const nazareth=document.getElementsByName('nazareth');
    const london=document.getElementsByName('london');
    if (compus==='Gaza') {
      Array.prototype.slice.call(gaza).map(e => {
        return e.removeAttribute('hidden');
      });
      Array.prototype.slice.call(nazareth).map(e => {
        return e.setAttribute('hidden', false);
      });
      Array.prototype.slice.call(london).map(e => {
        return e.setAttribute('hidden', false); ;
      });
    } else if (compus==='Nazareth') {
      Array.prototype.slice.call(nazareth).map(e => {
        return e.removeAttribute('hidden');
      });
      Array.prototype.slice.call(gaza).map(e => {
        return e.setAttribute('hidden', false);
      });
      Array.prototype.slice.call(london).map(e => {
        return e.setAttribute('hidden', false); ;
      });
    } else {
      Array.prototype.slice.call(london).map(e => {
        return e.removeAttribute('hidden');
      });
      Array.prototype.slice.call(gaza).map(e => {
        return e.setAttribute('hidden', false);
      });
      Array.prototype.slice.call(nazareth).map(e => {
        return e.setAttribute('hidden', false); ;
      });
    }
    this.props.storeAnswer({ name: 'compus', value: compus });
  }
  handleSelectChort(event) {
    const cohort= event.target.value;
    this.props.storeAnswer({ name: 'cohort', value: cohort });
  }

  render() {

    return (
      <div className='question__container'>
        <div className='q__container'>
          <h1>What cohort and campus you are in?</h1>
          <div>
            <h3 className='q__h3'>Campus</h3>
            <select className='Q_dropdown' onChange={this.handleSelectCompus}>
              <option selected disabled>Choose Campus</option>
              <option value='Gaza'>Gaza</option>
              <option value='London'>London</option>
              <option value='Nazareth'>Nazareth</option>
            </select>
          </div>
          <div>
            <h3 className='q__h3'>Cohort</h3>
            <select className='Q_dropdown' onChange={this.handleSelectChort}>
              <option selected disabled>Choose cohort</option>
              <option name='gaza' value='FACG3' hidden>FACG3</option>
              <option name='gaza' value='FACG2' hidden>FACG2</option>
              <option name='gaza' value='FACG1' hidden>FACG1</option>
              <option name='nazareth' value='FACN1' hidden>FACN1</option>
              <option name='nazareth' value='FACN2' hidden>FACN2</option>
              <option name='nazareth' value='FACN3' hidden>FACN3</option>
              <option name='london' value='FAC' hidden>FAC</option>
              <option name='london' value='FAC11' hidden>FAC11</option>
              <option name='london' value='FAC12' hidden>FAC12</option>
              <option name='london' value='FAC10' hidden>FAC10</option>
            </select>
          </div>
        </div>
        <div className='buttons'>
          <div />
          <ButtonNext nextQuestion='Q2' error='' />
        </div>
      </div>
    );
  }
}
Q1.propTypes = {
  storeAnswer: PropTypes.func };
const mapDispatchToProps ={
  storeAnswer: storeAnswer.compilationOfAnswers
};

export default connect(null, mapDispatchToProps)(Q1);
