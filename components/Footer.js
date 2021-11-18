import Link from 'next/link';
import HorizontalContainer from './HorizontalContainer';

export default function Footer() {
  return(
    <HorizontalContainer>
      <ul className="contact-links-list">
        <li className="contact-links-item">
          <Link href={"/"}>Posts</Link>
        </li>
        <li className="contact-links-item">
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
      <ul className="navigation-links-list">
        <li className="navigation-links-item">
          <Link href={"/"}>Posts</Link>
        </li>
        <li className="navigation-links-item">
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
    </HorizontalContainer>
  );
}
