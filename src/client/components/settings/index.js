import React, { Component } from 'react';
import { Loader } from 'react-loaders';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import getData from '../../actions/getStudentDataToSettings';
import Settings from './settingsComponent';

class MainSettings extends Component {
  componentDidMount() {
    this.props.data();
  }
  render() {
    const { isFetching , error, getStudentDataToSettings } = this.props;

    return (
      <div>

        <div>
          {
            isFetching
              ? <center className='center' style={{ marginTop: '250px' }}>
                <BeatLoader color={'#66D49D'} loading={isFetching} width={200} />
                <Loader loaded={false} type='ball-pulse-rise' />
                <h1>Info inbound<br/>
                Wait!!</h1>
              </center>
              :<div>
                <Settings
                  studentData={getStudentDataToSettings}
                />
              </div>
          }
          {
            error && (
              <div className='studentData-error'>
                { error }
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

MainSettings.propTypes = {
  data: PropTypes.func,
  getStudentDataToSettings: PropTypes.array,
  error: PropTypes.string,
  isFetching: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    getStudentDataToSettings: state.getStudentDataToSettings.studentData,
    error: state.getStudentDataToSettings.error,
    isFetching: state.getStudentDataToSettings.isFetching
  };
};

const mapDispatchToProps = {
  data: getData

};
export default connect(mapStateToProps, mapDispatchToProps)(MainSettings);
