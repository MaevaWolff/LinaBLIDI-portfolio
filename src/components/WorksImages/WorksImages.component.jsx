import React, { Component } from 'react';

export default class WorksImages extends Component {
  render() {
    return (
      <div className='worksImages'>
        <section className='worksImages__container'>
          {this.props.worksImages}
        </section>
      </div>
    );
  }
}
