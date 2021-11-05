import gsap from "gsap";

document.addEventListener("DOMContentLoaded", function (event) {
  window.onload = function () {
    const textNodes = document.querySelectorAll(".textAnimation");
    const titleNodes = document.querySelectorAll(".titleAnimation");
    const imageNodes = document.querySelectorAll(".imageAnimation");

    const options = {
      root: null,
      rootMargin: "-10px",
      threshold: 0.1,
    };

    //text animations
    const textObserver = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          gsap.to(entry.target, {
            duration: 0.5,
            ease: "back",
            rotate: "0_short",
            autoAlpha: 0.8,
          });
          textObserver.unobserve(entry.target);
        }
      });
    }, options);

    textNodes.forEach((node) => textObserver.observe(node));
    //title animations
    const titleObserver = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          gsap.to(entry.target, {
            duration: 0.5,
            ease: "back",
            rotate: "0_short",
            autoAlpha: 1,
          });
          titleObserver.unobserve(entry.target);
        }
      });
    }, options);

    titleNodes.forEach((node) => titleObserver.observe(node));

    //image animations
    const imageObserver = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          gsap.to(entry.target, { duration: 0.6, autoAlpha: 1 });
          imageObserver.unobserve(entry.target);
        }
      });
    }, options);

    imageNodes.forEach((node) => imageObserver.observe(node));
  };
});
