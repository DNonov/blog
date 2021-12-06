import Navbar from "./Navbar";
import Footer from "./Footer";
import Scroller from "./Scroller";

export default function Layout({children}) {
  return(
    <>
      <Navbar />
      {children}
      <Scroller />
      <Footer />
    </>
  );
}
