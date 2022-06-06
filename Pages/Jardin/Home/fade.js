const checkpoint = 900;
 
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    opacity = 0 + currentScroll / checkpoint;
  } else {
    opacity = 1;
  }
  document.querySelector(".fade-bg").style.opacity = opacity;
});