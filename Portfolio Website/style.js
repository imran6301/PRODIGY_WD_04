let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*= " + id + "]")
          .classList.add("active");
      });
    }
  });
};
document.addEventListener("DOMContentLoaded", function() {
  const text = "Shaik Imran";
  let index = 0;
  const typingSpeed = 150; // Adjust typing speed (milliseconds)

  function typeWriter() {
    if (index < text.length) {
      document.getElementById("typing-text").innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, typingSpeed);
    } else {
      document.getElementById("cursor").style.display = 'none';
    }
  }

  typeWriter();
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  pagnitation: {
    el: ".swiper-pagnitation",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .section-title", { origin: "top" });
ScrollReveal().reveal(
  ".image img, .services-container, .project-box, .contact form, .about-content",
  { origin: "bottom" }
);
