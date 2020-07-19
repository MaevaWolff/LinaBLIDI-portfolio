import React, { Component } from 'react';
import workingImage from '../../assets/workingImage.png';
import linkedinSVG from '../../assets/icons/linkedin.svg';
import dribbbleSVG from '../../assets/icons/dribbble.svg';
import githubSVG from '../../assets/icons/github.svg';

export default class ContactMe extends Component {
  render() {
    return (
      <div className='contactme'>
        <h2 className="contactme__mainTitle">contact me</h2>
        <h3 className="contactme__subTitle">Anywhere, Anytime</h3>
        <div className="contactme__content">
          <div className="contactme__infos">
          <p className="contactme__text">Feel free to contact me, i’m enjoying every project i can be on, plus its always a pleasure to work with differents profiles.</p>
          <p className="contactme__mail">Send Me A Mail!</p>
          <div className='contactme__socials'>
          <a className='contactme__socialsLinks' href='/'>
            <img src={linkedinSVG} alt='socials_icon_linkedin' />
          </a>
          <a className='contactme__socialsLinks' href='/'>
            <img src={dribbbleSVG} alt='socials_icon_dribbble' />
          </a>
          <a className='contactme__socialsLinks' href='/'>
            <img src={githubSVG} alt='socials_icon_github' />
          </a>
        </div>
          </div>
          <img src={workingImage} alt="workingImage" className="contactme__image"/>
        </div>
      </div>
    );
  }
}