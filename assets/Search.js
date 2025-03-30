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
  
  
  document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchResultsContainer = document.getElementById('searchResults');

    function filterPlaces(query) {
        return places.filter(place =>
            place.name.toLowerCase().includes(query.toLowerCase()) // Search based only on name
        );
    }

    function displayResults(results) {
        searchResultsContainer.innerHTML = ''; // Clear previous results

        if (results.length === 0) {
            searchResultsContainer.innerHTML = '<p class="no-results">No results found.</p>';
            searchResultsContainer.style.display = 'block';
            return;
        }

        results.forEach(place => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('search-result-item');
            resultItem.onclick = function () {
              window.location.href = `Template.html?name=${encodeURIComponent(place.name)}`;
            };
          

            resultItem.innerHTML = `
                <img src="${place.coverImg}" alt="${place.name}" class="result-img">
                <div class="result-info">
                    <h4>${place.name}</h4>
                    <p>${place.rating}</p>
                </div>
            `;

            searchResultsContainer.appendChild(resultItem);
        });

        searchResultsContainer.style.display = 'block';
    }

    searchInput.addEventListener('input', function () {
        const query = searchInput.value.trim();
        if (query.length > 0) {
            const results = filterPlaces(query);
            displayResults(results);
        } else {
            searchResultsContainer.innerHTML = '';
            searchResultsContainer.style.display = 'none';
        }
    });

    document.addEventListener('click', function (event) {
        if (!searchResultsContainer.contains(event.target) && !searchInput.contains(event.target)) {
            searchResultsContainer.style.display = 'none';
        }
    });
});
