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
