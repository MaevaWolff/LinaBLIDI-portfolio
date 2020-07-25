import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import works from '../../data/works.json';

export default function HomeWorks() {
  const [socoda] = useState('socoda');
  const [coquette] = useState('coquette');
  const [canwebreathenow] = useState('canwebreathenow');
  const [mypocket] = useState('mypocket');
  const [gallery] = useState('gallery');

  const handleMouseOver = event => {
    const body = document.body;
    const data = event.target.dataset.info;
    if (data === socoda) {
      body.classList.add('socoda');
    } else if (data === coquette) {
      body.classList.add('coquette');
    } else if (data === coquette) {
      body.classList.add('coquette');
    } else if (data === canwebreathenow) {
      body.classList.add('canwebreathenow');
    } else if (data === mypocket) {
      body.classList.add('mypocket');
    } else if (data === gallery) {
      body.classList.add('gallery');
    }
  };

  const handleMouseLeave = () => {
    const body = document.body;
    body.classList = '';
  };

  return (
    <div className='homeWorks'>
      {works.map((work, index) => {
        return (
          <Link
            className='homeWorks__container'
            key={index}
            to={`/works?name=${work.name}`}
            data-info={work.name}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            <div className='homeWorks__item'>
              <h3 className='homeWorks__name'>{work.name}</h3>
              <h4 className='homeWorks__year'>({work.year})</h4>
              <img
                src={require(`../../assets/${work.heroImage}`)}
                alt='home_hover'
                className={`homeWorks__image homeWorks__image--${work.name}`}
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
