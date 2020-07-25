import React from 'react';
import workingImage from '../../assets/workingImage.png';
import linkedinSVG from '../../assets/icons/linkedin.svg';
import dribbbleSVG from '../../assets/icons/dribbble.svg';
import githubSVG from '../../assets/icons/github.svg';

export default function HomeContact() {
  return (
    <div className='homeContact'>
      <h2 className='homeContact__mainTitle'>contact me</h2>
      <h3 className='homeContact__subTitle'>Anywhere, Anytime</h3>
      <div className='homeContact__content'>
        <div className='homeContact__infos'>
          <p className='homeContact__text'>
            Feel free to contact me, i’m enjoying every project i can be on,
            plus its always a pleasure to work with differents profiles.
          </p>
          <p className='homeContact__mail'>Send Me A Mail!</p>
          <div className='homeContact__socials'>
            <a
              className='homeContact__socialsLinks'
              href='https://www.linkedin.com/in/lina-blidi-000aa0174/'
            >
              <img src={linkedinSVG} alt='socials_icon_linkedin' />
            </a>
            <a
              className='homeContact__socialsLinks'
              href='https://dribbble.com/LinaBlidi'
            >
              <img src={dribbbleSVG} alt='socials_icon_dribbble' />
            </a>
            <a
              className='homeContact__socialsLinks'
              href='https://github.com/LinaBlidi'
            >
              <img src={githubSVG} alt='socials_icon_github' />
            </a>
          </div>
        </div>
        <img
          src={workingImage}
          alt='workingImage'
          className='homeContact__image'
        />
      </div>
    </div>
  );
}
