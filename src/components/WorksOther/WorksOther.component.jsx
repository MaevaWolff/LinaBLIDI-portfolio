import React from 'react';
import { Link } from 'react-router-dom';

export default function WorksOther() {
  return (
    <div className='worksOther'>
      <p className='worksOther__text'>SEE OTHER PROJECTS</p>
      <Link to='/#works' className='worksOther__back'>
        (go back to the projects list )
      </Link>
    </div>
  );
}
