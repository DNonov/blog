import Link from 'next/link';

export default function Navbar() {
  return(
    <nav className="navbar">
      <div className="navbar-inner-wrapper">
        <span className="logo">DNonov</span>
        <ul className="navbar-menu">
          <li className="navbar-menu-item">
            <Link href={"/"}>Posts</Link>
          </li>
          <li className="navbar-menu-item">
            <Link href={"/about"}>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
