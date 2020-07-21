import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class WorksImages extends Component {
  render() {
    return (
      <div className='worksImages'>
        <section className='worksImages__container'>
          {this.props.worksImages}
        </section>
        <div className='worksImages__mobile'>
          {this.props.worksImagesMobile}
        </div>
      </div>
    );
  }
}

WorksImages.propTypes = {
  worksImages: PropTypes.array,
  worksImagesMobile: PropTypes.array
};
