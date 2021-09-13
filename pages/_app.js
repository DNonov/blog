import "../styles/globals.css";
import "../styles/prism.css";
import "../styles/BlogPostTitleSection.css";
import "../styles/Navbar.css";
import "../components/Layout";
import Layout from "../components/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13.16/dist/katex.min.css" integrity="sha384-6LkG2wmY8FK9E0vU9OOr8UvLwsaqUg9SETfpq4uTCN1agNe8HRdE9ABlk+fVx6gZ" crossOrigin="anonymous" />

        <script defer src="https://cdn.jsdelivr.net/npm/katex@0.13.16/dist/katex.min.js" integrity="sha384-31El76TwmbHj4rF9DyLsygbq6xoIobG0W+jqXim+a3dU9W53tdH3A/ngRPxOzzaB" crossOrigin="anonymous"></script>

        <script defer src="https://cdn.jsdelivr.net/npm/katex@0.13.16/dist/contrib/auto-render.min.js" integrity="sha384-vZTG03m+2yp6N6BNi5iM4rW4oIwk5DfcNdFfxkk9ZWpDriOkXX8voJBFrAO7MpVl" crossOrigin="anonymous" ></script>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
