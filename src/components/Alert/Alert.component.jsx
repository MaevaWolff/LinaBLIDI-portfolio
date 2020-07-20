import React, { Component } from 'react';

export default class Alert extends Component {
  render() {
    return (
      <div className={`alert ${this.props.AlertType}`}>
        <p className='alert__text'>{this.props.AlertText}</p>
      </div>
    );
  }
}
