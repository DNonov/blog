import React, { useEffect } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import footnote from "markdown-it-footnote";
import katex from "markdown-it-katex";
import prism from "prismjs";
import "./prismLanguages";
import Head from "next/head";
import BlogPostTitleSection from '../components/BlogPostTitleSection';

const Post = ({htmlString, data}) => {
  useEffect(() => prism.highlightAll(), [])

  return(
    <>
      <Head>
        <title>{data.title}</title>
        <meta title="description" content={data.description} />
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
  md.use(katex)
    .use(footnote)
  const htmlString = md.render(parsedMarkdown.content)

  return {
    props: {
      htmlString,
      data: parsedMarkdown.data
    }
  }
};

export default Post;