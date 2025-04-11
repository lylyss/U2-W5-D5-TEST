document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const nav = document.querySelector("nav ul");

  mobileMenuBtn.addEventListener("click", function () {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      nav.style.display = "flex";
    } else {
      nav.style.display = "none";
    }
  });

  if (window.innerWidth <= 768) {
    nav.style.display = "none";
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
