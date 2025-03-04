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









