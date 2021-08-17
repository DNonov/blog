import Link from 'next/link';

export default function Navbar() {
  return(
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-menu-item">
          <Link href={"/"}>Posts</Link>
        </li>
      </ul>
    </nav>
  );
}
