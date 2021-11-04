import gsap from "gsap";

const button = document.querySelector(".header__box__icon");
const drawer = document.querySelector(".header__box__nav");

let isOpen = false;

const handleClick = () => {
  gsap.to(drawer, { duration: 0.15, scaleY: isOpen ? 0 : 1 });
  isOpen = !isOpen;
};

button.addEventListener("click", handleClick);
