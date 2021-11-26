const nav = document.querySelector("header");
const windowHeight = window.innerHeight;
let isSticky = false;

document.addEventListener("scroll", (e) => {
  if (window.pageYOffset > windowHeight && !isSticky) {
    isSticky = true;
    nav.classList.add("shadow");
    nav.style.position = "fixed";
  }

  if (window.pageYOffset <= windowHeight && isSticky) {
    isSticky = false;
    nav.classList.remove("shadow");
    nav.style.position = "relative";
  }
});
