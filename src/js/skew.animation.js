import gsap from "gsap";

const titles = document.querySelectorAll(".title");
const texts = document.querySelectorAll(".text");

const nodes = [[...titles], [...texts]];

nodes.forEach((node) =>
  gsap.timeline({ defaults: { duration: 0.3 } }).from(node, { rotate: 10 })
);
