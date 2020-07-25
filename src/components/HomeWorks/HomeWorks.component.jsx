import React from 'react';
import { Link } from 'react-router-dom';
import works from '../../data/works.json';

export default function HomeWorks() {
  return (
    <div className='homeWorks'>
      {works.map((work, index) => {
        return (
          <Link
            className='homeWorks__container'
            key={index}
            to={`/works?name=${work.name}`}
          >
            <div className='homeWorks__item'>
              <h3 className='homeWorks__name'>{work.name}</h3>
              <h4 className='homeWorks__year'>({work.year})</h4>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
