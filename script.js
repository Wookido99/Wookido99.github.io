document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");

  // Staggered reveal animation per page
  const blocks = Array.from(document.querySelectorAll(".reveal"));
  blocks.forEach((el, i) => {
    el.style.setProperty("--delay", `${Math.min(i * 0.12, 0.3)}s`);
  });

  // Auto page numbers
  const pages = Array.from(document.querySelectorAll(".pdf-page"));
  pages.forEach((page, i) => {
    page.setAttribute("data-page", `${i + 1} / ${pages.length}`);
  });
});
