gsap.registerPlugin(ScrollTrigger);

let masks = document.querySelectorAll(".mask");

masks.forEach((mask) => {
  let image = mask.querySelector("img");
  let zoom = mask.querySelector("figure");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: mask,
      toggleActions: "restart none none reset",
    },
  });

  tl.set(mask, { autoAlpha: 1 });

  tl.from(mask, 1.5, {
    delay: 0.5,
    xPercent: -110,
    ease: Power2.out,
  });

  tl.from(image, 1.5, {
    xPercent: 110,
    scale: 1.3,
    delay: -2,
    ease: Power2.out,
  });

  tl.from(zoom, 1.5, {
    xPercent: 110,
    scale: 1.3,
    delay: -2,
    ease: Power2.out,
  });
});
