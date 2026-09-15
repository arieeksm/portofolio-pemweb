const words = [
  "IT Student",
  "Web Programming Enthusiast",
  "Cybersecurity Enthusiast ",
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing");

function typeEffect() {
  if (!typingElement) return;

  const currentWord = words[wordIndex];

  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 40 : 80;

  if (!isDeleting && charIndex === currentWord.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typeSpeed = 400;
  }

  setTimeout(typeEffect, typeSpeed);
}

// Jalankan semua logika setelah DOM siap
document.addEventListener("DOMContentLoaded", () => {
  // 1. Efek Ketik
  typeEffect();

  // 2. Slider Auto-Fade Foto Profil
  const images = document.querySelectorAll(".hero-img");
  let currentImgIndex = 0;

  if (images.length > 0) {
    setInterval(() => {
      images[currentImgIndex].classList.remove("active");
      currentImgIndex = (currentImgIndex + 1) % images.length;
      images[currentImgIndex].classList.add("active");
    }, 4000);
  }

  // 3. Hamburger Menu (Diisi Pengecekan Aman/Null-check)
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navMenu = document.getElementById("nav-menu");

  if (hamburgerBtn && navMenu) {
    const hamburgerIcon = hamburgerBtn.querySelector("i");

    hamburgerBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");

      if (hamburgerIcon) {
        if (navMenu.classList.contains("active")) {
          hamburgerIcon.classList.remove("fa-bars");
          hamburgerIcon.classList.add("fa-xmark");
        } else {
          hamburgerIcon.classList.remove("fa-xmark");
          hamburgerIcon.classList.add("fa-bars");
        }
      }
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        if (hamburgerIcon) {
          hamburgerIcon.classList.remove("fa-xmark");
          hamburgerIcon.classList.add("fa-bars");
        }
      });
    });
  }
});
