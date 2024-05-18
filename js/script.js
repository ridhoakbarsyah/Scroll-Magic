$(document).ready(function () {
  $(".slider").slick({
    dots: true, // Menampilkan navigasi titik-titik
    autoplay: true, // Otomatis berputar
    autoplaySpeed: 2000, // Kecepatan putaran dalam milidetik (ms)
  });
});

const slider = document.querySelector(".slider");

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let slideIndex = 0;

  showSlides(slideIndex);

  function showSlides(index) {
    const slides = slider.querySelectorAll("div");
    if (index >= slides.length) {
      slideIndex = 0;
    }
    if (index < 0) {
      slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
  }

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  prevBtn.addEventListener("click", function () {
    plusSlides(-1);
  });

  nextBtn.addEventListener("click", function () {
    plusSlides(1);
  });
});
