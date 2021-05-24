import Link from 'next/link';
import fs from 'fs';

const Home = ({slugs}) => (
  <ul>
    {slugs.map(slug =>
      <li key={slug}>
        <Link href={slug}><a>{`go to: ${slug}`}</a></Link>
      </li>
    )}
  </ul>
);

export const getStaticProps = async () => {
  const posts = fs.readdirSync('posts')
                  .map(post => post.replace('.md', ''));

  return {
    props : {
      slugs: posts
    }
  }
};

export default Home;
