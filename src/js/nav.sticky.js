const nav = document.querySelector("header");
const windowHeight = window.innerHeight;
let isSticky = false;

document.addEventListener("scroll", (e) => {
  if (window.pageYOffset > windowHeight && !isSticky) {
    isSticky = true;
    nav.style.position = "fixed";
  }

  if (window.pageYOffset <= windowHeight && isSticky) {
    isSticky = false;
    nav.style.position = "relative";
  }
});
