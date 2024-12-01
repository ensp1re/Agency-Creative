document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".header__menu");
  const closeMenu = document.querySelector(".close-menu");
  const mobileMenu = document.querySelector(".mobile-menu");
  const logo = document.querySelector(".header__logo");
  const homeMob = document.querySelector(".home-mob");
  const aboutMob = document.querySelector(".about-mob");
  const servicesMob = document.querySelector(".services-mob");
  const projectsMob = document.querySelector(".projects-mob");
  const about = document.querySelector(".about");
  const services = document.querySelector(".services");
  const projects = document.querySelector(".projects");

  about.addEventListener("click", function () {
    window.scrollTo({
      top: 1100,
      behavior: "smooth",
    });
  });

  services.addEventListener("click", function () {
    window.scrollTo({
      top: 1850,
      behavior: "smooth",
    });
  });

  projects.addEventListener("click", function () {
    window.scrollTo({
      top: 2500,
      behavior: "smooth",
    });
  });

  homeMob.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  aboutMob.addEventListener("click", function () {
    window.scrollTo({
      top: 900,
      behavior: "smooth",
    });
  });

  servicesMob.addEventListener("click", function () {
    window.scrollTo({
      top: 1650,
      behavior: "smooth",
    });
  });

  projectsMob.addEventListener("click", function () {
    window.scrollTo({
      top: 3500,
      behavior: "smooth",
    });
  });

  logo.addEventListener("click", function () {
    window.document.location.href = "/";
  });

  function toggleMenu() {
    mobileMenu.classList.toggle("open");
    document.body.style.overflow = mobileMenu.classList.contains("open")
      ? "hidden"
      : "";
  }

  menuToggle.addEventListener("click", toggleMenu);
  closeMenu.addEventListener("click", toggleMenu);

  // Close menu when clicking on a link
  const menuLinks = mobileMenu.querySelectorAll("a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", toggleMenu);
  });
});
