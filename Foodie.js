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

  document.getElementById('toggleButton').addEventListener('click', function() {
    var conts = document.querySelector('.conts');
    var contsElements = document.querySelectorAll('.cont');
    conts.classList.toggle('single-column');

    var conts = document.querySelector('.toggleline');
    conts.classList.toggle('longline');

    var conts = document.querySelector('.toggleline1');
    conts.classList.toggle('longline');
    
    contsElements.forEach(function(cont) {
        cont.classList.toggle('toggle');
    });
}); 

document.getElementById('toggleButton').addEventListener('click', function() {
  var conts = document.querySelectorAll('.cont-img');
  conts.forEach(function(cont) {
      cont.classList.toggle('imgresize');
  });
});


document.getElementById('toggleButton').addEventListener('click', function() {
  var conts = document.querySelectorAll('.cont-content');
  conts.forEach(function(cont) {
      cont.classList.toggle('contentresize');
  });

  var conts = document.querySelectorAll('.cont-name');
  conts.forEach(function(cont) {
      cont.classList.toggle('nameresize');
  });

  var conts = document.querySelectorAll('.cont-rating');
  conts.forEach(function(cont) {
      cont.classList.toggle('ratingresize');
  });
  var conts = document.querySelectorAll('.cont-desc');
  conts.forEach(function(cont) {
      cont.classList.toggle('descresize');
  });  
});

document.querySelectorAll('.dropbtn').forEach(button => {
  button.addEventListener('click', function () {
    const dropdownContent = this.nextElementSibling;
    dropdownContent.classList.toggle('show');

    document.querySelectorAll('.dropdown-content').forEach(content => {
      if (content !== dropdownContent) {
        content.classList.remove('show');
      }
    });
  });
});

document.querySelectorAll('.dropdown-content .tags').forEach(tag => {
  tag.addEventListener('click', function () {
    this.classList.toggle('toggled');
    updateSelectedFilters();
  });
});

function updateSelectedFilters() {
  const filterTagsContainer = document.querySelector('.filter-tags');
  filterTagsContainer.innerHTML = '';

  const selectedTags = document.querySelectorAll('.dropdown-content .tags.toggled');
  if (selectedTags.length > 0) {
    document.querySelector('.selected-filters').style.display = 'flex';
  } else {
    document.querySelector('.selected-filters').style.display = 'none';
  }

  selectedTags.forEach(tag => {
    const selectedTag = document.createElement('div');
    selectedTag.classList.add('tags');
    selectedTag.textContent = tag.textContent;
    filterTagsContainer.appendChild(selectedTag);
  });
}

document.querySelector('.clear-filters-btn').addEventListener('click', function () {
  document.querySelectorAll('.dropdown-content .tags.toggled').forEach(tag => {
    tag.classList.remove('toggled');
  });

  document.getElementById('distanceSlider').value = 0;
  document.getElementById('distanceValue').textContent = '0 km';

  updateSelectedFilters();
});

const slider = document.getElementById('distanceSlider');
const output = document.getElementById('distanceValue');

slider.addEventListener('input', function() {
  output.textContent = `${this.value} km`;
});

document.querySelector('.apply-btn').addEventListener('click', function() {
  const distanceValue = `${slider.value} km`;

  const filterTagsContainer = document.querySelector('.filter-tags');
  const distanceTag = document.createElement('div');
  distanceTag.classList.add('tags');
  distanceTag.textContent = distanceValue;
  filterTagsContainer.appendChild(distanceTag);

  document.querySelector('.selected-filters').style.display = 'flex';
});

document.querySelector('.toggleFilter').addEventListener('click', function(event) {
  event.stopPropagation();
  const menu = document.querySelector('.filterbar');
  menu.classList.toggle('show');
});

document.addEventListener('click', function(event) {
  const menu = document.querySelector('.filterbar');
  if (!menu.contains(event.target) && !event.target.closest('.toggleFilter')) {
    menu.classList.remove('show');
  }
});
document.addEventListener('scroll', function(event) {
  const menu = document.querySelector('.filterbar');
  if (!menu.contains(event.target) && !event.target.closest('.toggleFilter')) {
    menu.classList.remove('show');
  }
});