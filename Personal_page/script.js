document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");

  const reveals = Array.from(document.querySelectorAll(".reveal"));
  reveals.forEach((element, index) => {
    const delay = Math.min(index * 0.08, 0.56);
    element.style.setProperty("--delay", `${delay}s`);
  });

  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      const expanded = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("open");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuBtn.setAttribute("aria-expanded", "false");
        nav.classList.remove("open");
      });
    });
  }

  const sectionIds = ["about", "education", "publications", "experience", "skills", "goals"];
  const links = Array.from(document.querySelectorAll(".nav a"));
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        const id = entry.target.id;
        links.forEach((link) => {
          const active = link.getAttribute("href") === `#${id}`;
          link.classList.toggle("active", active);
        });
      });
    },
    { rootMargin: "-40% 0px -45% 0px", threshold: 0 }
  );

  sectionIds.forEach((id) => {
    const section = document.getElementById(id);
    if (section) {
      observer.observe(section);
    }
  });
});
