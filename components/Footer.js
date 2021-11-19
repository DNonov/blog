import Link from 'next/link';
import HorizontalContainer from './HorizontalContainer';

export default function Footer() {
  return(
    <HorizontalContainer>
      <ul className="links-list">
        <li className="links-item">
          <Link href={"/"}>Posts</Link>
        </li>
        <li className="links-item">
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
      <ul className="links-list">
        <li className="links-item">
          <Link href={"/"}>Posts</Link>
        </li>
        <li className="links-item">
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
    </HorizontalContainer>
  );
}
