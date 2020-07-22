import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import works from '../../data/works.json';

export default class HomeWorks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socoda: 'socoda',
      coquette: 'coquette',
      canwebreathenow: 'canwebreathenow?',
      mypocket: 'mypocket',
      gallery: '3d gallery'
    };
  }
  handleMouseOver = event => {
    console.log(JSON.parse(event.target.dataset.info));
    const body = document.body;
    const data = JSON.parse(event.target.dataset.info);
    if (data === this.state.socoda) {
      body.classList.add('socoda');
    } else if (data === this.state.coquette) {
      body.style.backgroundColor = 'purple';
    } else if (data === this.state.coquette) {
      body.style.backgroundColor = 'purple';
    } else if (data === this.state.canwebreathenow) {
      body.style.backgroundColor = 'palevioletred';
    } else if (data === this.state.mypocket) {
      body.style.backgroundColor = 'blue';
    } else if (data === this.state.gallery) {
      body.style.backgroundColor = 'yellow';
    }
  };

  handleMouseLeave = () => {
    const body = document.body;
    body.style.backgroundColor = '';
    body.classList = '';
  };
  render() {
    return (
      <div className='homeWorks'>
        {works.map((work, index) => {
          return (
            <Link
              className='homeWorks__container'
              key={index}
              to={`/works?name=${work.name}`}
            >
              <div
                data-info={JSON.stringify(work.name)}
                onMouseOver={this.handleMouseOver}
                onMouseLeave={this.handleMouseLeave}
                className='homeWorks__item'
              >
                <h3 className='homeWorks__name'>{work.name}</h3>
                <h4 className='homeWorks__year'>({work.year})</h4>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}
