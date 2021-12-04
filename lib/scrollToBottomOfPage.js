
export default function scrollToBottomOfPage(window) {
  window.scrollTo({
    left: 0,
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
}

