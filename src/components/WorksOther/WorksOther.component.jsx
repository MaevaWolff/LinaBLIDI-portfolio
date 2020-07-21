import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class WorksOther extends Component {
  render() {
    return (
      <div className='worksOther'>
        <p className='worksOther__text'>SEE OTHER PROJECTS</p>
        <Link to='/#works' className='worksOther__back'>
          (go back to the projects list )
        </Link>
      </div>
    );
  }
}
