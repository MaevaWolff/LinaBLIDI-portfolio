import React, { Component } from 'react';
import works from '../../data/works.json';

import GridsBackground from '../../components/GridsBackground/GridsBackground.component';

export default class WorksPage extends Component {
  render() {
    return (
      <div className='works'>
        <GridsBackground />
        {works.map((el, index) => {
          return (
            <div key={index} className='works-items'>
              <ul>
                {el.partners.map((partner, i) => {
                  return <li key={i}>{partner}</li>;
                })}
              </ul>

              <p>{el.name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
