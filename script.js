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

document.addEventListener("DOMContentLoaded", typeEffect);

// Slider Auto-Fade Foto Profil
const images = document.querySelectorAll(".hero-img");
let currentImgIndex = 0;

function changeImage() {
  // Sembunyikan foto saat ini (hapus class active)
  images[currentImgIndex].classList.remove("active");

  // Pindah ke indeks foto berikutnya
  currentImgIndex = (currentImgIndex + 1) % images.length;

  // Tampilkan foto baru (tambah class active)
  images[currentImgIndex].classList.add("active");
}

// Ganti foto setiap 4 detik (4000 milidetik)
setInterval(changeImage, 4000);

// Logika Toggle Hamburger Menu
const hamburgerBtn = document.getElementById("hamburger-btn");
const navMenu = document.getElementById("nav-menu");
const hamburgerIcon = hamburgerBtn.querySelector("i");

hamburgerBtn.addEventListener("click", () => {
  // 1. Tambah/Hapus class 'active' di nav-links
  navMenu.classList.toggle("active");

  // 2. Ubah ikon dari 'garis tiga' (fa-bars) jadi 'silang' (fa-xmark)
  if (navMenu.classList.contains("active")) {
    hamburgerIcon.classList.remove("fa-bars");
    hamburgerIcon.classList.add("fa-xmark");
  } else {
    hamburgerIcon.classList.remove("fa-xmark");
    hamburgerIcon.classList.add("fa-bars");
  }
});

// Otomatis tutup menu setelah pengguna mengklik salah satu link navigasi
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburgerIcon.classList.remove("fa-xmark");
    hamburgerIcon.classList.add("fa-bars");
  });
});
