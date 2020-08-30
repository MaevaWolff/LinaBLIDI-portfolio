import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const backToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    const body = document.body;
    body.style.overflowY = "hidden";

    if (!menuOpen) {
      // backToTop();
    }
    else {
      body.style.overflowY = "";
    }
  };



  return (
    <header className='header'>
      <Link to='/' className='header__logo' onClick={backToTop}>
        <img src="" alt="/"/>
      </Link>

      <div
        className={menuOpen ? 'header__burger open' : 'header__burger'}
        onClick={handleMenuClick}
      >
        <svg
          width='36'
          height='60'
          viewBox='0 0 36 10'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            className='burger1'
            width='36'
            height='4'
            transform='matrix(1 0 0 -1 0 4)'
            fill='#151515'
          />
          <rect
            className='burger2'
            width='36'
            height='2'
            transform='matrix(1 0 0 -1 0 10)'
            fill='#151515'
          />
        </svg>
      </div>

      <div className={menuOpen ? 'header__menu open' : 'header__menu '}>
        <p className='header__mail'>Send Me A Mail !</p>
        <ul className='header__links'>
          <li className='header__item'>
            <a href='/'>
              INTRO /<em> (01)</em>
            </a>
          </li>
          <li className='header__item'>
            <a href='#works'>
              MY WORKS /<em> (02)</em>
            </a>
          </li>
          <li className='header__item'>
            <a href='#about'>
              ABOUT ME /<em> (03)</em>
            </a>
          </li>
          <li className='header__item'>
            <a href='/'>
              CONTACT ME /<em> (04)</em>
            </a>
          </li>
        </ul>
        <p className='header__copyright'>
          © LINA BLIDI, 2020 ALL RIGHT RESERVED
        </p>
      </div>
    </header>
  );
}
