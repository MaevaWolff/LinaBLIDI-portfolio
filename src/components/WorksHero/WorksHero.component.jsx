import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import IndicatorScroll from '../IndicatorScroll/IndicatorScroll.component';

export default function WorksHero(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
    const body = document.body;
    body.classList = '';
  });

  return (
    <div className='worksHero'>
      <IndicatorScroll />
      <div className='worksHero__infos'>
        <h1 className='worksHero__name'>{props.worksName}</h1>
        <p className='worksHero__hashtag'>#{props.worksHashtag}</p>
        <p className='worksHero__description'>{props.worksDescription}</p>

        <a href={props.worksLink} className='worksHero__link'>
          <p>see the website right here</p>
        </a>
      </div>
      {/* <img
          className='worksHero__image'
          src={require(`../../assets/${this.props.worksHero}`)}
          alt='image_hero_project'
        /> */}
    </div>
  );
}

WorksHero.propTypes = {
  worksName: PropTypes.string.isRequired,
  worksHashtag: PropTypes.string
};

WorksHero.defaultProp = {
  worksName: 'PROJECT NAME'
};
