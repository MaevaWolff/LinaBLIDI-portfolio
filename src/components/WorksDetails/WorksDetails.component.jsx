import React, { Component } from 'react';

import WorksDetailsTitle from './WorksDetailsTitle.component';

export default class WorksDetails extends Component {
  render() {
    return (
      <div className='worksDetails'>
        <h2 className='worksDetails__title'>PROJECT DETAILS</h2>
        <p className='worksDetails__time'>{this.props.worksTime}</p>
        <p className='worksDetails__date'>{this.props.worksDate}</p>

        <section className='worksDetails__categories'>
          <article className='worksDetails__category'>
            <WorksDetailsTitle worksDetailsTitle='Title' />
            <p className='worksDetails__name'>{this.props.worksName}</p>
          </article>
          <article className='worksDetails__category'>
            <WorksDetailsTitle worksDetailsTitle='Colors' />
            <div className='worksDetails__colors'>
              <div
                className='worksDetails__color'
                style={{ backgroundColor: this.props.worksColor1 }}
              ></div>
              <div
                className='worksDetails__color'
                style={{ backgroundColor: this.props.worksColor2 }}
              ></div>
              <div
                className='worksDetails__color'
                style={{ backgroundColor: this.props.worksColor3 }}
              ></div>
            </div>
          </article>
          <article className='worksDetails__category'>
            <WorksDetailsTitle worksDetailsTitle='Typography' />
          </article>
          <article className='worksDetails__category'>
            <WorksDetailsTitle worksDetailsTitle='Partners' />
            <p className='worksDetails__partners'>{this.props.worksPartners}</p>
          </article>
        </section>
      </div>
    );
  }
}