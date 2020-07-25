import React from 'react';
import PropTypes from 'prop-types';

export default function Alert(props) {
  return (
    <div className={`alert ${props.AlertType}`}>
      <p className='alert__text'>{props.AlertText}</p>
    </div>
  );
}

Alert.propTypes = {
  AlertType: PropTypes.string,
  AlertText: PropTypes.string.isRequired
};

Alert.defaultProps = {
  AlertText: 'message of alert'
};
