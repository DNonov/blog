import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

import BlogPostTitleSection from '../components/BlogPostTitleSection';


const Home = ({posts}) => {
  return (
    <section className="content-wrapper">
      <ul className="post-catalog">
        {posts.map(post =>
          post.isPublished === true ?
            <li key={post.title}>
              <BlogPostTitleSection data={post}/>
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
  }, content}) => ({
    title,
    slug,
    abstract,
    tags,
    publishDate,
    updateDate,
    isPublished,
    content
  });

  const posts = allPosts.map(p => fs.readFileSync(path.join('posts', p)))
    .map(matter)
    .map(extractObjects)

  return { props: { posts } }
};

export default Home;
