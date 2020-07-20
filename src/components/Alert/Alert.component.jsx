import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Alert extends Component {
  render() {
    return (
      <div className={`alert ${this.props.AlertType}`}>
        <p className='alert__text'>{this.props.AlertText}</p>
      </div>
    );
  }
}

Alert.propTypes = {
  AlertType: PropTypes.string,
  AlertText: PropTypes.string.isRequired
};

Alert.defaultProps = {
  AlertText: 'message of alert'
};
