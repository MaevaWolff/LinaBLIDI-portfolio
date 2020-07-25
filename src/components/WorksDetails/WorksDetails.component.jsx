import React from 'react';
import PropTypes from 'prop-types';

import WorksDetailsTitle from './WorksDetailsTitle.component';

export default function WorksDetails(props) {
  return (
    <div className='worksDetails'>
      <h2 className='worksDetails__title'>PROJECT DETAILS</h2>
      <p className='worksDetails__time'>{props.worksTime}</p>
      <p className='worksDetails__date'>{props.worksDate}</p>

      <section className='worksDetails__categories'>
        <article className='worksDetails__category'>
          <WorksDetailsTitle worksDetailsTitle='Title' />
          <p className='worksDetails__name'>{props.worksName}</p>
        </article>
        <article className='worksDetails__category'>
          <WorksDetailsTitle worksDetailsTitle='Colors' />
          <div className='worksDetails__colors'>
            <div
              className='worksDetails__color'
              style={{ backgroundColor: props.worksColor1 }}
            ></div>
            <div
              className='worksDetails__color'
              style={{ backgroundColor: props.worksColor2 }}
            ></div>
            <div
              className='worksDetails__color'
              style={{ backgroundColor: props.worksColor3 }}
            ></div>
          </div>
        </article>
        <article className='worksDetails__category'>
          <WorksDetailsTitle worksDetailsTitle='Typography' />
        </article>
        <article className='worksDetails__category'>
          <WorksDetailsTitle worksDetailsTitle='Partners' />
          <ul className='worksDetails__partners'>{props.worksPartners}</ul>
        </article>
      </section>
    </div>
  );
}

WorksDetails.propTypes = {
  worksTime: PropTypes.string,
  worksDate: PropTypes.string,
  worksName: PropTypes.string.isRequired,
  worksColor1: PropTypes.string,
  worksColor2: PropTypes.string,
  worksColor3: PropTypes.string,
  worksPartners: PropTypes.array
};

WorksDetails.defaultProps = {
  worksName: 'project name'
};
