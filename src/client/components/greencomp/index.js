import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Welcome from '../welcome/';
import Q1 from '../questions/q1.js';
import Q2 from '../questions/q2.js';
import Q3 from '../questions/q3.js';
import Q4 from '../questions/q4.js';
import Q5 from '../questions/q5.js';
import Q6 from '../questions/q6.js';
import End from '../questions/endofquesions.js';

import './style.css';

class Form extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { questionNumber } =this.props;

    return (
      <div id='questions' className='questions'>
        <div id='start' className='start'>
          <div className='container-question'>
          </div>
          <div>{questionNumber==='Welcome'?<Welcome/>
            :questionNumber==='Q1'?<Q1/>
              :questionNumber==='Q2'?<Q2/>
                :questionNumber==='Q3'?<Q3/>
                  :questionNumber==='Q4'?<Q4/>
                    :questionNumber==='Q5'?<Q5/>
                      :questionNumber==='Q6'?<Q6/>
                        :questionNumber==='End'?<End/>:null}</div>

        </div>
      </div>
    );
  }
}
Form.propTypes = {
  questionNumber: PropTypes.string,
  onClick: PropTypes.string

};

const mapStateToProps = state => {
  return { questionNumber: state.questionNumber };
};

export default connect(mapStateToProps, null)(Form);
