import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }
  render() {
    return (
      <header className='header'>
        <div className='header__burger' onClick={this.handleMenuClick}>
          <svg
            width='36'
            height='10'
            viewBox='0 0 36 10'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              width='36'
              height='4'
              transform='matrix(1 0 0 -1 0 4)'
              fill='#151515'
            />
            <rect
              width='36'
              height='2'
              transform='matrix(1 0 0 -1 0 10)'
              fill='#151515'
            />
          </svg>
        </div>
        <div
          className={
            this.state.menuOpen ? 'header__menu open' : 'header__menu '
          }
        >
          <p className='header__mail'>Send Me A Mail !</p>
          <ul className='header__links'>
            <li className='header__item'>
              <a href='/'>
                INTRO /<em> (01)</em>
              </a>
            </li>
            <li className='header__item'>
              <a href='/'>
                MY WORKS /<em> (02)</em>
              </a>
            </li>
            <li className='header__item'>
              <a href='/'>
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
}
