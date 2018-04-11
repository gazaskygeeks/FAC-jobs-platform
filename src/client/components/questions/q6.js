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
      files: ''
    };
    this.handleLinks = this.handleLinks.bind(this);
    this.handlePortfolio = this.handlePortfolio.bind(this);
  }
  handleLinks(ev) {
    const projectlinks= [];
    projectlinks.push(ev.target.value);
    this.props.storeAnswer({ name: 'projects', value: projectlinks });

  }
  handlePortfolio(ev) {
    const portfolio= ev.target.value;
    this.props.storeAnswer({ name: 'portfolio', value: portfolio });

  }
  uploadFile(files) {
    console.log('file data shit');
    const file = files[0];
    const cloudName = 'drgrbu6fw';
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    const timestamp = Date.now()/1000;
    const uploadPreset = 'wnb3avvf';
    const paramsStr = `timestamp=${timestamp}&upload_preset=${uploadPreset}Fe4eNIyg_ZlUTQ2q2zdGbsebjAw`;
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
      console.log('upload complete: ', JSON.stringify(res.body.secure_url));
      const uploaded = res.body.secure_url;
      this.setState({
        files: 'success uploading one file'
      });
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
              <input type='text' placeholder='Link your project 1' onChange={this.handleLinks}/>
              <input type='text' placeholder='Link your project 2' onChange={this.handleLinks}/>
              <input className='q6__lastInput' type='text' placeholder='Link your portfolio' onChange={this.handlePortfolio}/>
              <Dropzone onDrop={this.uploadFile.bind(this)}>
                <h3 className='q6_input__h3'>Upload CV.
                  <i className='fa fa-upload'></i></h3>
              </Dropzone>
              <h3>{this.state.files}</h3>
            </div>
          </div>
        </div>
        <div className='buttons'>
          <ButtonBack prevQuestion='Q5' />
          <ButtonNext nextQuestion='End' />
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
