document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");

  const blocks = Array.from(document.querySelectorAll(".reveal"));
  blocks.forEach((el, i) => {
    el.style.setProperty("--delay", `${Math.min(i * 0.07, 0.35)}s`);
  });
});
