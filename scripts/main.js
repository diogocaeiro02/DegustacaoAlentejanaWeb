document.addEventListener("DOMContentLoaded", () => {
  const animatedSections = document.querySelectorAll(
    ".intro, .gallery-item, .value-item"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // anima só 1 vez
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  animatedSections.forEach((section) => observer.observe(section));
});

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("nav-links");

  burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    burger.classList.toggle("active");
  });
});
