import gsap from "gsap";

const nodes = document.querySelectorAll(".opacityAnimation");

nodes.forEach((node) => {
  gsap.to(node, { duration: 0.3, opacity: 1 });
});
