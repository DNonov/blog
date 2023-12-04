import Link from 'next/link';
import HorizontalContainer from './HorizontalContainer';

export default function Footer() {
  return(
    <footer className="footer">
      <HorizontalContainer classN="top-border">
        <ul className="links-list">
          <li>
            <span className="links-list-label">Contacts</span>
          </li>
          <li className="links-item clickable">
            <Link href="https://github.com/DNonov">
              <i className="bi bi-github">&nbsp; github.com</i>
            </Link>
          </li>
          <li className="links-item clickable">
            <Link href="https://www.goodreads.com/user/show/93703550-dimitar-nonov">
              <i className="bi bi-book">&nbsp; goodreads.com</i>
            </Link>
          </li>
          <li className="links-item clickable">
            <Link href="https://twitter.com/dimitar_nonov">
              <i className="bi bi-twitter">&nbsp; twitter.com</i>
            </Link>
          </li>
          <li className="links-item clickable">
            <Link href="mailto:d.nonov@gmail.com">
              <i className="bi bi-envelope">&nbsp; D.Nonov@gmail.com</i>
            </Link>
          </li>
        </ul>
        <ul className="links-list">
          <li>
            <span className="links-list-label">Links</span>
          </li>
          <li className="links-item clickable">
            <Link href={"/"}>Posts</Link>
          </li>
          <li className="links-item clickable">
            <Link href={"/search"}>Search</Link>
          </li>
          <li className="links-item clickable">
            <a className="contact">Contacts</a>
          </li>
        </ul>
      </HorizontalContainer>
      <span className="copyright">&copy; 2023 Dimitar Nonov.</span>
    </footer>
  );
}
