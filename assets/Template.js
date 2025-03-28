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





  


function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const placeName = getQueryParam("name");

const place = places.find(p => p.name === placeName);

if (place) {
  document.getElementById("cover-image").src = place.coverImg;
  document.getElementById("place-name").textContent = place.name;
  document.getElementById("place-rating").textContent = place.rating;
  document.getElementById("place-description").textContent = place.description;
  document.querySelector(".contact-info h2").textContent = `${place.name} HEADQUARTERS`;
  document.querySelector(".contact-info p").textContent = place.address;
  document.querySelector(".contact-info a.phone").href = `tel:${place.contactNumber}`;
  document.querySelector(".contact-info a.phone").textContent = place.contactNumber;
  document.querySelector(".contact-info a.email").href = `mailto:${place.email}`;
  document.querySelector(".contact-info a.email").textContent = place.email;



  const tagsContainer = document.getElementById("place-tags");
  place.tags.forEach(tag => {
    const tagElement = document.createElement("span");
    tagElement.textContent = tag;
    tagsContainer.appendChild(tagElement);
  });

  document.getElementById("opening-hours").textContent = `Opening Hours: ${place.openingHours}`;
  document.getElementById("special-features").textContent = `Special Features: ${place.specialFeatures.join(", ")}`;
  const dishesContainer = document.getElementById("popular-dishes");
  place.popularDishes.forEach(dish => {
    const dishElement = document.createElement("li");
    dishElement.textContent = dish;
    dishesContainer.appendChild(dishElement);
  });

  document.getElementById("share-button").addEventListener("click", () => {
    if (navigator.share) {
      navigator.share({
        title: place.name,
        text: "Check out this amazing restaurant!",
        url: window.location.href
      }).catch(console.error);
    } else {
      alert("Web Share API is not supported on this browser.");
    }
  });

  document.getElementById("direction-button").addEventListener("click", () => {
    window.open(place.location, "_blank");
  });
} else {
  document.getElementById("profile-section").innerHTML = "Restaurant not found.";
}

document.getElementById("contact-button").addEventListener("click", () => {
  window.location.href = `tel:${place.contactNumber}`;
});

document.getElementById("menu-button").addEventListener("click", () => {
  window.open(place.menuLink, "_blank");
});

document.getElementById("map").src = place.mapEmbed;