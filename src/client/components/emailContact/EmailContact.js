import React, { Component } from 'react';

import './emailContact.css';

class EmailContact extends Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.close = this.close.bind(this);
  }
  close(ev) {
    console.log(ev);
    ev('.chat').slideToggle(300, 'swing');
    ev('.chat-message-counter').fadeToggle(300, 'swing');
  }

  render() {
    return (
      <div id='live-chat'>
        <header className='clearfix'>
          <button onClick={this.close.bind(this)} className='chat-close'>x</button>
          <h4>John Doe</h4>
        </header>

        <div className='chat'>
          <div className='chat-history'>
            <div className='chat-message clearfix'>
              <div className='chat-message-content clearfix'>
                <span className='chat-time'>13:35</span>
                <h5>John Doe</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Error, explicabo quasi ratione odio dolorum harum.</p>
              </div>
            </div>
            <div>
              <div className='chat-message clearfix'>
                <div className='chat-message-content clearfix'>
                  <span className='chat-time'>13:37</span>
                  <h5>Marco Biedermann</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis,
            nulla accusamus magni vel debitis numquam qui tempora rem voluptatem delectus!</p>
                </div>
              </div>

              <div className='chat-message clearfix'>
                <div className='chat-message-content clearfix'>
                  <span className='chat-time'>13:38</span>
                  <h5>John Doe</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
              </div>

            </div>
          </div>
          <form action='#' method='post'>
            <fieldset>
              <input type='text' placeholder='Type your message…' autoFocus />
              <input type='hidden' />
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default EmailContact;
