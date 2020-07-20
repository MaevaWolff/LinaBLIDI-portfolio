import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class WorksDetailsTitle extends Component {
  render() {
    return (
      <div className='worksDetailsTitle'>{this.props.worksDetailsTitle}</div>
    );
  }
}

WorksDetailsTitle.propTypes = {
  worksDetailsTitle: PropTypes.string.isRequired
};

WorksDetailsTitle.defaultProps = {
  worksDetailsTitle: 'CATEGORY NAME'
};
