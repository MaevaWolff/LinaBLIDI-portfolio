import React from 'react';

export default function HomeAbout() {
  return (
    <div className='homeAbout'>
      <h2 className='homeAbout__mainTitle'>HEY THAT’S ME</h2>
      <h3 className='homeAbout__subTitle'>Oh, Finaly there?</h3>
      <section className='homeAbout__infos'>
        <p className='homeAbout__me'>
          I’m a creative 20yo girl who love touching Everything, especially in
          <span> digital design</span>. <br /> I’m inspiring myself through
          Fashion, Nature, Litterature... <br /> <br /> Studying at Hetic on my
          2nd Year im looking for a <em>2 yEARS INTERNSHIP</em> in Paris.
          <br />
          <br /> “ At least be creative “ innit ?
        </p>
        <div className='homeAbout__skills'>
          <div className='homeAbout__container'>
            <h3 className='homeAbout__what'>WHAT I USE</h3>
            <div className='homeAbout__items'>
              <p className='homeAbout__item'>Figma</p>
              <p className='homeAbout__item'>Adobe XD</p>
              <p className='homeAbout__item'>Photoshop</p>
              <p className='homeAbout__item'>Animate</p>
              <p className='homeAbout__item'>After Effect</p>
              <p className='homeAbout__item'>Illustrator</p>
              <p className='homeAbout__item'>Blender</p>
              <p className='homeAbout__item'>DAZ Studio</p>
            </div>
          </div>
          <div className='homeAbout__container'>
            <h3 className='homeAbout__what'>WHAT I DO</h3>
            <div className='homeAbout__items'>
              <p className='homeAbout__item'>HTML</p>
              <p className='homeAbout__item'>CSS/SCSS</p>
              <p className='homeAbout__item'>JavaScript</p>
              <p className='homeAbout__item'>Git</p>
            </div>
          </div>
        </div>
      </section>
      <div className='homeAbout__available'>
        <a className='homeAbout__cv' href='/'>
          DOWNLOAD MY CV
        </a>
        <a className='homeAbout__freelance' href='/'>
          I’m available for Freelance
        </a>
      </div>
    </div>
  );
}
