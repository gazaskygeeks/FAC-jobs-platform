import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import sha1 from 'sha1';
import superagent from 'superagent';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as storeAnswer from '../../actions/storeanswer';
import ButtonNext from '../button/nextBtn';
import ButtonBack from '../button/backBtn';
import './style.css';

class Q6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project1: {
        name: '',
        link: ''
      },
      project2: {
        name: '',
        link: ''
      }
    };
    this.handleLinks = this.handleLinks.bind(this);
    this.handlePortfolio = this.handlePortfolio.bind(this);
    this.save = this.save.bind(this);
  }
  handleLinks(ev) {
    const state2 = this.state;
    if (ev.target.name === 'name1') {
      this.setState({
        project1: { ...state2.project1,name: ev.target.value }
      });
    }
    if (ev.target.name ==='project1') {
      this.setState({
        project1: { ...state2.project1,link: ev.target.value }
      });
    }
    if (ev.target.name==='name2') {
      this.setState({
        project2: { ...state2.project2,name: ev.target.value }
      });
    }
    if (ev.target.name==='project2') {
      this.setState({
        project2: { ...state2.project2,link: ev.target.value }
      });
    }
  }
  save() {
    this.props.storeAnswer({ name: 'projects', value: this.state });

  }
  handlePortfolio(ev) {
    const portfolio= ev.target.value;
    this.props.storeAnswer({ name: 'portfolio', value: portfolio });
  }
  uploadFile(files) {
    const file = files[0];
    const cloudName = 'drgrbu6fw';
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    const timestamp = Date.now()/1000;
    const uploadPreset = 'wnb3avvf';
    const paramsStr =
    `timestamp=${timestamp}&upload_preset=${uploadPreset}Fe4eNIyg_ZlUTQ2q2zdGbsebjAw`;
    const signature = sha1(paramsStr);
    const params = {
      api_key: '722744556869565',
      timestamp,
      upload_preset: uploadPreset,
      signature
    };
    const uploadRequest = superagent.post(url);
    uploadRequest.attach('file', file);

    Object.keys(params).forEach(key => {
      uploadRequest.field(key, params[key]);
    });
    uploadRequest.end((err, res) => {
      if (err) {
        alert(err);

        return;
      }
      const uploaded = res.body.url;
      this.props.storeAnswer({ name: 'cv', value: uploaded });
    });
  }

  render() {

    return (
      <div className='question__container'>
        <div className='q__container'>
          <h1>Upload your (Projects links, C.V., Portfolio) </h1>
          <div className='q6__container'>
            <div className='q6_links'>
              <h3 className='q6__h3'> Project links </h3>
              <h3 className='q6_p__h3'>(Portfolio)</h3>
              <h3 >CV.</h3>

            </div>
            <div className='q6_input'>
              <input type='text' name='name1' placeholder='Project1 Title' onChange={this.handleLinks} onKeyUp={this.save}/>
              <input type='text' name='name2' className='projects_container_name2' placeholder='Project2 Title' onChange={this.handleLinks} onKeyUp={this.save}/>
            </div>
            <div>
              <div className='q6_input'>
                <input type='text' name='project1' placeholder='Link your project 1' onChange={this.handleLinks} onKeyUp={this.save}/>
                <input type='text' name='project2' placeholder='Link your project 2' onChange={this.handleLinks} onKeyUp={this.save}/>
                <input type='text' className='q6_input_portfolio' placeholder='Link your portfolio' onChange={this.handlePortfolio}/>
              </div>
              <Dropzone onDrop={this.uploadFile.bind(this)}
                className='Dropzone'>
                <h3 className='q6_input__h3'>Upload CV.
                  <i className='fa fa-upload'></i>
                </h3>
              </Dropzone>
            </div>
          </div>

        </div>
        <h3 style={{ marginTop: '225px',marginRight: '-31px',
          color: 'lawngreen' }}>{this.state.files}</h3>
        <div className='buttons'>
          <ButtonBack prevQuestion='Q5' />
          <ButtonNext classname='q6error' nextQuestion='End' />
        </div>
      </div>
    );
  }
}

Q6.propTypes = {
  storeAnswer: PropTypes.func
};
const mapDispatchToProps ={
  storeAnswer: storeAnswer.compilationOfAnswers

};

export default connect(null, mapDispatchToProps)(Q6);
