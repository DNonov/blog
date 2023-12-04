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
        <li className="navbar-menu-item clickable">
          <Link href={"/"}>Posts</Link>
        </li>
        <li className="navbar-menu-item clickable">
          <Link href={"/search"}>Search</Link>
        </li>
        <li className="navbar-menu-item clickable">
          <a className="contact">Contact</a>
        </li>
      </ul>
    </HorizontalContainer>
  );
}
