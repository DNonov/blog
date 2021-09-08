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

const Post = ({htmlString, data}) => {
  useEffect(() => prism.highlightAll(), [])

  return(
    <>
      <Head>
        <title>{data.title}</title>
        <meta title="description" content={data.description} />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13.16/dist/katex.min.css" integrity="sha384-6LkG2wmY8FK9E0vU9OOr8UvLwsaqUg9SETfpq4uTCN1agNe8HRdE9ABlk+fVx6gZ" crossOrigin="anonymous" />

        <script defer src="https://cdn.jsdelivr.net/npm/katex@0.13.16/dist/katex.min.js" integrity="sha384-31El76TwmbHj4rF9DyLsygbq6xoIobG0W+jqXim+a3dU9W53tdH3A/ngRPxOzzaB" crossOrigin="anonymous"></script>

        <script defer src="https://cdn.jsdelivr.net/npm/katex@0.13.16/dist/contrib/auto-render.min.js" integrity="sha384-vZTG03m+2yp6N6BNi5iM4rW4oIwk5DfcNdFfxkk9ZWpDriOkXX8voJBFrAO7MpVl" crossOrigin="anonymous"
        onLoad="renderMathInElement(document.body);"></script>
      </Head>
      <div className="post-wrapper">
        <article className="post">
          <BlogPostTitleSection data={data}/>
          <div className="post-body" dangerouslySetInnerHTML={{ __html: htmlString }}/>
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

  const htmlString = md.render(parsedMarkdown.content);

  return {
    props: {
      htmlString,
      data: parsedMarkdown.data
    }
  }
};

export default Post;
