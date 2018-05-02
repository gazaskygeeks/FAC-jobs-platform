import React, { Component } from 'react';

import './Search.css';

class Search extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  };
  onSubmit(e) {
    e.preventDefault();
  }
  render() {
    // const { myList } = this.props;
    const myList = ['Firefox', 'IE', 'Hi', 'Chrome'];

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            list='suggestions'
            name='search'
            type='search'
            placeholder='search....'
            className='searchbox' />
          <button className='searchbtn' type='submit'>Find</button>
        </form>
        <datalist id='suggestions'>
          {
            myList.map((el, index) => <option key={index} value={el} />)
          }
        </datalist>
      </div>
    );
  }
}

export default Search;
