//// script.js
//
//document.addEventListener('DOMContentLoaded', () => {
//    // Add smooth scroll for internal links
//    document.querySelectorAll('a').forEach(anchor => {
//        anchor.addEventListener('click', function (e) {
//            if (this.hash !== "") {
//                e.preventDefault();
//                document.querySelector(this.hash).scrollIntoView({ behavior: 'smooth' });
//            }
//        });
//    });
//});
//
//// script.js
//
//let currentSlide = 0;
//
//function showSlide(index) {
//  const slides = document.querySelector('.slides');
//  const totalSlides = document.querySelectorAll('.slide').length;
//
//  // Loop slides back to the start/end if out of bounds
//  if (index >= totalSlides) currentSlide = 0;
//  else if (index < 0) currentSlide = totalSlides - 1;
//  else currentSlide = index;
//
//  // Move the slides container
//  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
//}
//
//function moveSlide(step) {
//  showSlide(currentSlide + step);
//}
//
//// Auto slide every 3 seconds
//setInterval(() => {
//  moveSlide(1);
//}, 3000);

// script.js

//let currentSlide = 0;
//
//function showSlide(index) {
//  const slides = document.querySelectorAll('.slide');
//  const totalSlides = slides.length;
//
//  slides.forEach(slide => (slide.style.opacity = '0')); // Hide all slides
//  currentSlide = (index + totalSlides) % totalSlides;   // Wrap around slides
//  slides[currentSlide].style.opacity = '1';             // Show current slide
//}
//
//function moveSlide(step) {
//  showSlide(currentSlide + step);
//}
//
//// Auto slide every 5 seconds
//setInterval(() => {
//  moveSlide(1);
//}, 5000);
//
//// Initialize first slide
//showSlide(currentSlide);

// script.js

// script.js

let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;

  // Loop back to the first slide if we're at the end or beginning
  currentSlide = (index + totalSlides) % totalSlides;

  // Move the slides container to show the correct slide
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function moveSlide(step) {
  showSlide(currentSlide + step);
}

// Initialize first slide
showSlide(currentSlide);

// Auto slide every 5 seconds
setInterval(() => {
  moveSlide(1);
}, 5000);


