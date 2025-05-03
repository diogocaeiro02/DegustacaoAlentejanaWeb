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
  const navMobile = document.querySelector(".nav-mobile");

  burger.addEventListener("click", () => {
    navMobile.classList.toggle("active");
    burger.classList.toggle("active");
  });

  document.querySelectorAll(".nav-mobile a").forEach((link) => {
    link.addEventListener("click", () => {
      navMobile.classList.remove("active");
      burger.classList.remove("active");
    });
  });
});
