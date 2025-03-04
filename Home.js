document.querySelector('.hamburger-icon').addEventListener('click', function() {
    const menu = document.querySelector('.hamburger');
    if (menu.classList.contains('show')) {
      menu.classList.remove('show');
    } else {
      menu.classList.add('show');
    }
  });

  document.addEventListener('click', function(event) {
    const menu = document.querySelector('.hamburger');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    if (!menu.contains(event.target) && !hamburgerIcon.contains(event.target)) {
      menu.classList.remove('show');
    }
  });
  document.addEventListener('scroll', function(event) {
    const menu = document.querySelector('.hamburger');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    if (!menu.contains(event.target) && !hamburgerIcon.contains(event.target)) {
      menu.classList.remove('show');
    }
  });

const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;
let autoSlideInterval;

function showSlide(index) {
    slider.scrollTo({
        left: slider.clientWidth * index,
        behavior: 'smooth'
    });
    currentIndex = index;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

slider.addEventListener('mouseenter', stopAutoSlide);
slider.addEventListener('mouseleave', startAutoSlide);

startAutoSlide();
