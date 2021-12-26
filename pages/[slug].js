import React, { useEffect } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import mathjax from "markdown-it-mathjax";
import footnote from "markdown-it-footnote";
import prism from "prismjs";
import Head from "next/head";
import BlogPostTitleSection from '../components/BlogPostTitleSection';

const Post = ({ data }) => {
  useEffect(() => {
    prism.highlightAll();
    renderMathInElement(document.body);
  });

  return(
    <>
      <Head>
        <title>Dnonov | {data.title}</title>
        <meta title="description" content={data.description} />
      </Head>
      <div className="post-wrapper">
        <article className="post">
          <BlogPostTitleSection data={data} />
          <div className="post-body" dangerouslySetInnerHTML={{ __html: data.content }}/>
        </article>
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync("posts");

  return {
    paths: files.map(filename => ({
      params: { slug: filename.replace(".md", "") }
    })),
    fallback: false
  }
};

export const getStaticProps = async ({params: {slug}}) => {
  const markdownWithMetadata = fs.readFileSync(path.join("posts", slug + ".md")).toString();
  const parsedMarkdown = matter(markdownWithMetadata);
  const md = new MarkdownIt();
  md.use(mathjax())
    .use(footnote);

  const content = md.render(parsedMarkdown.content);
  const data = {...parsedMarkdown.data, content};

  return {
    props: {data}
  }
};

export default Post;
