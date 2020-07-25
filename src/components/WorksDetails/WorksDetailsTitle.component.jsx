import React from 'react';
import PropTypes from 'prop-types';

export default function WorksDetailsTitle(props) {
  return <div className='worksDetailsTitle'>{props.worksDetailsTitle}</div>;
}

WorksDetailsTitle.propTypes = {
  worksDetailsTitle: PropTypes.string.isRequired
};

WorksDetailsTitle.defaultProps = {
  worksDetailsTitle: 'CATEGORY NAME'
};
