import "../styles/globals.css";
import "../styles/prism.css";
import "../styles/BlogPostTitleSection.css";
import "../styles/Navbar.css";
import "../styles/HorizontalContainer.css";
import "../styles/Footer.css";
import "../components/Layout";
import Layout from "../components/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dimitar Nonov</title>
        <html lang="en" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13.16/dist/katex.min.css" integrity="sha384-6LkG2wmY8FK9E0vU9OOr8UvLwsaqUg9SETfpq4uTCN1agNe8HRdE9ABlk+fVx6gZ" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css" />

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
