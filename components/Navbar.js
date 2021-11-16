import Link from 'next/link';
import HorizontalContainer from './HorizontalContainer';

export default function Navbar() {
  return(
    <HorizontalContainer>
      <span className="logo">DNonov</span>
      <ul className="navbar-menu">
        <li className="navbar-menu-item">
          <Link href={"/"}>Posts</Link>
        </li>
        <li className="navbar-menu-item">
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
    </HorizontalContainer>
  );
}
