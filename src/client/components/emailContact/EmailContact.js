import React, { Component } from 'react';
import send from '../../actions/emailsendingAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './emailContact.css';

class EmailContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined
    };
    this.close = this.close.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
  }

  close(ev) {
    ev('.chat').slideToggle(300, 'swing');
    ev('.chat-message-counter').fadeToggle(300, 'swing');
  }

  handlesubmit(event) {
    event.preventDefault();
    if (event.target[1].value.trim() !== '') {

      const data = {
        recieveremail: event.target[2].value,
        msgContent: event.target[1].value
      };
      this.props.send(data);
      event.target[1].value='';
    } else {
      this.setState({
        error: 'write something'
      });
    }
  }

  render() {
    if (!this.props.studentData)

      return <div />;
    const arr = this.props.studentData.map(item => {
      return (
        <div id='live-chat' key={item.id}>
          <header className='clearfix'>
            <button onClick={this.close.bind(this)} className='chat-close'>x</button>
            <h4 className='contact_text'>{item.username}</h4>
          </header>

          <div className='chat'>
            <div className='chat-history'>
              <div>
                <div className='chat-message clearfix'>
                  <div className='chat-message-content clearfix'>
                    {(this.props.message.success!=='')?
                      <h3 style={{ color: 'green' }}>Message Sent</h3>
                      :(this.state.error!==undefined)?
                        <h3 style={{ color: 'orange' }}>{this.state.error}</h3>
                        :
                        (item.email!=='')?
                          <h3 style={{ color: 'blue' }}>Send Email</h3>:
                          <h3 style={{ color: 'red' }}>User did not have Email</h3>}
                  </div>
                </div>
              </div>
            </div>
            <form onSubmit={this.handlesubmit}>
              <fieldset className='fieldset'>
                <input type='text' className='contact_input  msgInput' placeholder='Type your message…' autoFocus />
                <input className='contact_input' value={item.email} type='hidden' />
                {(item.email!=='')?
                  <button type='submit' className='sendMailBtn'>Send</button>:
                  <button type='submit' className='sendMailBtn' disabled>Send</button>}
              </fieldset>
            </form>
          </div>
        </div>
      );
    });

    return (
      <div>
        {arr}
      </div>
    );
  }
}

EmailContact.propTypes = {
  studentData: PropTypes.array,
  sendData: PropTypes.array,
  filter: PropTypes.func,
  coming: PropTypes.str,
  message: PropTypes.obj,
  send: PropTypes.func
};

const mapStateToProps = state => {
  return {
    message: state.send
  };
};
const mapDispatchToProps = {
  send
};

export default connect(mapStateToProps, mapDispatchToProps)(EmailContact);
