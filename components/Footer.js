import Link from 'next/link';
import HorizontalContainer from './HorizontalContainer';

export default function Footer() {
  return(
    <section className="footer">
      <HorizontalContainer classN="top-border">
        <ul className="links-list">
          <span className="links-list-label">Contacts</span>
          <li className="links-item">
            <Link href="https://github.com/DNonov">
              <i className="bi bi-github">&nbsp; github.com</i>
            </Link>
          </li>
          <li className="links-item">
            <Link href="https://www.goodreads.com/user/show/93703550-dimitar-nonov">
              <i className="bi bi-book">&nbsp; goodreads.com</i>
            </Link>
          </li>
          <li className="links-item">
            <Link href="https://twitter.com/dimitar_nonov">
              <i className="bi bi-twitter">&nbsp; twitter.com</i>
            </Link>
          </li>
          <li className="links-item">
            <Link href="mailto:d.nonov@gmail.com">
              <i className="bi bi-envelope">&nbsp; D.Nonov@gmail.com</i>
            </Link>
          </li>
        </ul>
        <ul className="links-list">
          <span className="links-list-label">Links</span>
          <li className="links-item">
            <Link href={"/"}>Posts</Link>
          </li>
          <li className="links-item">
            <Link href={"/tags"}>Tags</Link>
          </li>
          <li className="links-item">
            <a className="contact">Contacts</a>
          </li>
          <li className="links-item">
            <Link href={"/about"}>About</Link>
          </li>
        </ul>
      </HorizontalContainer>
      <span className="copyright">&copy; 2021 Dimitar Nonov.</span>
    </section>
  );
}
