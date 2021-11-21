import Link from 'next/link';
import HorizontalContainer from './HorizontalContainer';

export default function Navbar() {
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
          <Link href={"/projects"}>Projects</Link>
        </li>
        <li className="navbar-menu-item">
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
    </HorizontalContainer>
  );
}
