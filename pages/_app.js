import "../styles/globals.css";
import "../styles/prism.css";
import "../styles/BlogPostTitleSection.css";
import "../styles/Navbar.css";
import "../components/Layout";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
