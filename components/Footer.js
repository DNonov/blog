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
            <a href="https://github.com/DNonov" target="_blank">
              <i className="bi bi-github">&nbsp; github.com</i>
            </a>
          </li>
          <li className="links-item clickable">
            <a href="https://www.goodreads.com/user/show/93703550-dimitar-nonov" target="_blank">
              <i className="bi bi-book">&nbsp; goodreads.com</i>
            </a>
          </li>
          <li className="links-item clickable">
            <a href="https://twitter.com/dimitar_nonov" target="_blank">
              <i className="bi bi-twitter">&nbsp; twitter.com</i>
            </a>
          </li>
          <li className="links-item clickable">
            <a href="mailto:d.nonov@gmail.com" target="_blank">
              <i className="bi bi-envelope">&nbsp; D.Nonov@gmail.com</i>
            </a>
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
