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
    autoSlideInterval = setInterval(nextSlide, 3000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}



startAutoSlide();



function toggleSearch(event) {
  event.preventDefault();
  const searchBarContainer = document.getElementById('searchBarContainer');
  if (searchBarContainer.classList.contains('show')) {
      searchBarContainer.classList.remove('show');
  } else {
      searchBarContainer.style.display = 'block';
      setTimeout(() => { searchBarContainer.classList.add('show'); }, 10);
  }
}

document.addEventListener('click', function(event) {
  const searchBarContainer = document.getElementById('searchBarContainer');
  const searchLink = document.querySelector('.n.search');
  if (!searchBarContainer.contains(event.target) && !searchLink.contains(event.target)) {
      searchBarContainer.classList.remove('show');
  }
});
document.addEventListener('scroll', function(event) {
  const searchBarContainer = document.getElementById('searchBarContainer');
  const searchLink = document.querySelector('.n.search');
  if (!searchBarContainer.contains(event.target) && !searchLink.contains(event.target)) {
      searchBarContainer.classList.remove('show');
  }
});


const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('fade-visible');
      }
  });
});

const sliderContainer = document.querySelector('.slider-container');
if (sliderContainer) {
  sliderContainer.classList.add('fade-hidden');
  observer1.observe(sliderContainer);
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('fade-visible');
      }
  });
});

const outtop = document.querySelector('.outtop9');
if (outtop) {
  outtop.classList.add('fade-hidden');
  observer.observe(outtop);
}

const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('visible');
      }
  });
});

document.querySelectorAll('.top9txt, .fortext').forEach(element => {
  observer2.observe(element);
});

(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="xkpsr3lwPLeesWZcgY_Mp";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();
