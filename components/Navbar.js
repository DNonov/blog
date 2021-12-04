import { useEffect } from 'react';
import Link from 'next/link';
import HorizontalContainer from './HorizontalContainer';

import scrollToBottomOfPage from '../lib/scrollToBottomOfPage';

export default function Navbar() {
  useEffect(() => {
    document
      .querySelector('.contact')
      .addEventListener('click', () => scrollToBottomOfPage(window));
  });

  return(
    <HorizontalContainer classN="bottom-border" >
      <span className="logo">DNonov</span>
      <ul className="navbar-menu">
        <li className="navbar-menu-item">
          <Link href={"/"}>Posts</Link>
        </li>
        <li className="navbar-menu-item">
          <Link href={"/tags"}>Tags</Link>
        </li>
        <li className="navbar-menu-item">
          <a className="contact">Contact</a>
        </li>
        <li className="navbar-menu-item">
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
    </HorizontalContainer>
  );
}
