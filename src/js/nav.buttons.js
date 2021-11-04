import gsap from "gsap";

const buttons = document.querySelectorAll(".header__box__nav__button");

const handleMouseEnter = (btn) => {
  gsap.to(btn, {
    duration: 0.2,
    y: 3,
    x: 1,
    boxShadow: "1px 1px 4px 0px rgba(0, 0, 0, 0.5)",
  });
};
const handleMouseOut = (btn) => {
  gsap.to(btn, {
    duration: 0.2,
    y: 0,
    x: 0,
    boxShadow: "none",
  });
};

buttons.forEach((btn) => {
  btn.addEventListener("mouseenter", () => handleMouseEnter(btn));
  btn.addEventListener("mouseout", () => handleMouseOut(btn));
});

// 'start','projects','contact'
