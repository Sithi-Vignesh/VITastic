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
      filterContents();
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

  updateSelectedFilters();
  resetFilters();
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

function filterContents() {
  const selectedTags = Array.from(document.querySelectorAll('.dropdown-content .tags.toggled')).map(tag => tag.getAttribute('data-tag'));
  const contents = document.querySelectorAll('.cont');

  if (selectedTags.length > 0) {
      contents.forEach(content => {
          const contentTags = Array.from(content.querySelectorAll('.desc-crd')).map(desc => desc.textContent.trim());
          const hasAllTags = selectedTags.every(tag => contentTags.includes(tag));
          if (hasAllTags) {
              content.style.display = '';
          } else {
              content.style.display = 'none';
          }
      });
  } else {
      contents.forEach(content => {
          content.style.display = '';
      });
  }
}

function resetFilters() {
  const contents = document.querySelectorAll('.cont');
  contents.forEach(content => {
      content.style.display = '';
  });
}

function toggleSearch(event) {
  event.preventDefault();
  const searchBarContainer = document.getElementById('searchBarContainer');
  const toggleButton = document.getElementById('toggleButton');

  if (searchBarContainer.classList.contains('show')) {
    searchBarContainer.classList.remove('show');
    setTimeout(() => {
      searchBarContainer.style.display = 'none'; 
      toggleButton.style.display = 'block'; 
    }, 300); 
  } else {
    searchBarContainer.style.display = 'block'; 
    toggleButton.style.display = 'none'; 
    setTimeout(() => {
      searchBarContainer.classList.add('show');
    }, 10);
  }
}

document.addEventListener('click', function (event) {
  const searchBarContainer = document.getElementById('searchBarContainer');
  const searchLink = document.querySelector('.n.search');
  const toggleButton = document.getElementById('toggleButton'); 

  if (
    !searchBarContainer.contains(event.target) &&
    !searchLink.contains(event.target)
  ) {
    searchBarContainer.classList.remove('show');
  }
});

document.addEventListener('scroll', function () {
  const searchBarContainer = document.getElementById('searchBarContainer');
  const toggleButton = document.getElementById('toggleButton'); 

  searchBarContainer.classList.remove('show');
  setTimeout(() => {
    searchBarContainer.style.display = 'none';
    toggleButton.style.display = 'block';
  }, 300);
});


function viewPlace(placeName) {
  window.location.href = `Template.html?name=${encodeURIComponent(placeName)}`;
}



function filterContents() {
  const selectedTags = Array.from(document.querySelectorAll('.dropdown-content .tags.toggled')).map(tag => tag.getAttribute('data-tag'));

  const contents = document.querySelectorAll('.cont');

  if (selectedTags.length > 0) {
      contents.forEach(content => {
          const placeName = content.querySelector('.cont-name').textContent.trim();
          const place = places.find(p => p.name === placeName);

          if (place) {
              const hasAllTags = selectedTags.every(tag => place.tags.includes(tag));
              if (hasAllTags) {
                  content.style.display = '';
              } else {
                  content.style.display = 'none';
              }
          } else {
              content.style.display = 'none';
          }
      });
  } else {
      contents.forEach(content => {
          content.style.display = '';
      });
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const filterbar = document.querySelector('.filterbar');
  const dropdowns = document.querySelectorAll('.type-filters .dropdown');

  setTimeout(() => {
      filterbar.style.opacity = 1;
      filterbar.style.transform = 'translateX(0)';
  }, 100); 

  dropdowns.forEach((dropdown, index) => {
      setTimeout(() => {
          dropdown.style.opacity = 1;
          dropdown.style.transform = 'translateY(0)';
      }, 1000 + index * 100); 
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const contentBlocks = document.querySelectorAll('.cont');

  contentBlocks.forEach((block, index) => {
      setTimeout(() => {
          block.classList.add('visible');
      }, index * 100); 
  });
});