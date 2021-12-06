import { useEffect } from "react";

const Scroller = () => {
  useEffect(() => {
    const btn = document.querySelector('.scroller');

    function scrollToBottomOfPage(window) {
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
      });
    }


    btn.addEventListener('click', () => scrollToBottomOfPage(window));

    window.onscroll = function () {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = 'block';
      } else {
        btn.style.display = 'none';
      }
    }

  });
  return (
    <span className="scroller">&#10506;</span>
  );
};

export default Scroller;
