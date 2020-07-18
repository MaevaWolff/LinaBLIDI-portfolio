import React, { Component } from 'react';
import works from '../../data/works.json';

export default class HomeWorks extends Component {
  render() {
    return (
      <div className='homeWorks'>
        {works.map((work, index) => {
          return (
            <div key={index} className='homeWorks__item'>
              <h3 className='homeWorks__name'>{work.name}</h3>
              <h4 className='homeWorks__year'>({work.year})</h4>
            </div>
          );
        })}
      </div>
    );
  }
}
