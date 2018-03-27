import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as bulidProfile from '../../actions/storeanswer';
import * as getUserId from '../../actions/getUserIdAction';

import ButtonBack from '../button/backBtn';

import './style.css';

class End extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    this.props.completeLogin();
  }

  render() {

    return (
      <div className='question__container'>
        <div className='q__container end'>
          <h2 className='end__h1'>Great!</h2>
          <div>
            <p className='end__p'>Thanks for contacting us
              Welcome to FAC Jobs again.
              Now, wait for the manager to contact you.
            </p>
            <i className='fa fa-heart' style={{ fontSize: '48px',color: 'white' }}></i>
          </div>

        </div>
        <div className='buttons'>

          <ButtonBack prevQuestion='Q6'/>
          <Link className='Link' to={`/profile/${this.props.id()}`}>
            <div className='next__btn end__btn' onClick={this.handleSubmit}>
              <h1 className='btn__next'>Go to profile</h1>
              <i className='fa fa-angle-right next__btn__q' id='fa-angle-right'></i>
            </div>
          </Link>

        </div>

      </div>
    );
  }
}

End.propTypes = {
  completeLogin: PropTypes.func,
  id: PropTypes.func
};

const mapDispatchToProps = {
  completeLogin: bulidProfile.saveAnswer,
  id: getUserId.getUserId

};
export default connect(null, mapDispatchToProps)(End);
