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