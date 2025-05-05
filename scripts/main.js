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

ScrollReveal().reveal(".reveal", {
  distance: "50px",
  duration: 1000,
  easing: "ease-out",
  origin: "bottom",
  interval: 200,
});

const lightbox = GLightbox({
  selector: ".glightbox",
});

(function () {
  emailjs.init("JcBCkpOghJmUrFPu0");
})();

document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_hlite3l", "template_dn7hb34", this).then(
      () => {
        alert("Mensagem enviada com sucesso!");
        this.reset();
      },
      (error) => {
        alert("Erro ao enviar: " + error.text);
      }
    );
  });
