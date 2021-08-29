import Link from 'next/link';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';


const Home = ({posts}) => {
  return (
    <section className="post-catalog-wrapper">
      <ul className="post-catalog">
        {posts.map(post =>
          post.isPublished === true ?
            <li key={post.title}>
              <Link href={"/"+post.slug}>
                <h1 className="post-title">{post.title}</h1>
              </Link>
              <p className="post-abstract">{post.abstract}</p>
            </li>
          :
            undefined
        )}
      </ul>
    </section>
  );
};

export const getStaticProps = async () => {
  const allPosts = fs.readdirSync('posts');

  const extractObjects = ({data:{
    title,
    slug,
    abstract,
    tags,
    publishDate,
    updateDate,
    isPublished
  }}) => ({
    title,
    slug,
    abstract,
    tags,
    publishDate,
    updateDate,
    isPublished
  });

  const posts = allPosts.map(p => fs.readFileSync(path.join('posts', p)))
    .map(matter)
    .map(extractObjects)

  return { props: { posts } }
};

export default Home;
