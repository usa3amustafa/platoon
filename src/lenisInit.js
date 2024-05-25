// src/lenisInit.js

import Lenis from "@studio-freight/lenis"

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // default easing
  direction: "vertical", // vertical scrolling
  gestureDirection: "vertical", // vertical gesture scrolling
  smooth: true,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

export default lenis
