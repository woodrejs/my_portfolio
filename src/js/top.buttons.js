import gsap from "gsap";

const button = document.querySelector(".footer__box__button__icon");

const handleMouseEnter = () => {
  gsap.to(button, {
    duration: 0.2,
    y: 3,
    x: 1,
    boxShadow: "1px 1px 4px 0px rgba(0, 0, 0, 0.5)",
  });
};
const handleMouseOut = () => {
  gsap.to(button, {
    duration: 0.2,
    y: 0,
    x: 0,
    boxShadow: "none",
  });
};
const handleClick = () => window.scrollTo(0, 0);

button.addEventListener("mouseenter", handleMouseEnter);
button.addEventListener("mouseout", handleMouseOut);
button.addEventListener("click", handleClick);
