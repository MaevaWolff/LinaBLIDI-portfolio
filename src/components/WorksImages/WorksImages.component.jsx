import React from 'react';
import PropTypes from 'prop-types';

export default function WorksImages(props) {
  return (
    <div className='worksImages'>
      <section className='worksImages__container'>{props.worksImages}</section>
      <div className='worksImages__mobile'>{props.worksImagesMobile}</div>
    </div>
  );
}

WorksImages.propTypes = {
  worksImages: PropTypes.array,
  worksImagesMobile: PropTypes.array
};
