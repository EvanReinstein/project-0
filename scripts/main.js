
// Map
  // initiates map, centered on Chicago
map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 41.8781, lng: -87.6298},
  zoom: 1,
  // mapTypeId: 'terrain'
});
  // constructs city obj
var city = function (latitude, longitude) {
  this.latitude = latitude,
  this.longitude = longitude
};

function makeMapMarker () {
  var highlandPark = new city(42.18, -87.80);
  var annArbor = new city(42.28, -83.74);
  var firenze = new city(43.77, 11.26);
  var cekmekoy = new city(41.05, 29.24);
  var madrid = new city(40.42, -3.70);
  var chicago = new city(41.88, -87.63);
  var nyc = new city(40.68, -73.94);
  var oakland = new city(37.80, -122.27);
  var cities = [highlandPark, annArbor, firenze, cekmekoy, madrid, chicago, nyc, oakland];

  cities.forEach(function (city) {
    var marker = new google.maps.Marker({
      position: { lat: city.latitude, lng: city.longitude },
      map: map,
    });
    marker.addListener('click', function() {
          map.setZoom(9);
          map.setCenter(marker.getPosition());
    });
  });
}
makeMapMarker();

// Smooth Scroll
$('a').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();
    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top}, 800);
    }
});


// Testimonial Reveal/Hide Cycle
function testimonialCycle() {
    var quotes = $(".testimonial");
    var quoteIndex = -1;
//call on next quote
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2000)
            .delay(6000)
            .fadeOut(2000, showNextQuote);
    }
    showNextQuote();
};
testimonialCycle();

//***** Dropdown Menu *****//
// Set click event on hamburger
var menuButton = document.querySelector('.fa-bars');
// console.log(menuButton);
menuButton.addEventListener('click', menuClick);

// menu click
function menuClick (event) {
  console.log(event);
  var dropdown = document.querySelector('.dropdown');

  if (dropdown.classList.contains('dropdown-hidden')) {
    dropdown.classList.toggle('dropdown-hidden');
  } else {
    dropdown.classList.toggle('dropdown-hidden');
  }
}

// Nav Bar highlight
function navBarHighlight (id) {
  var navLink = document.querySelector(`.nav-item a[href='#${id}']`);
  // console.log(navLink);

  var offSetHeight = .6 * (window.innerHeight);
  inView.offset({
    bottom:offSetHeight
  });

  inView(`#${id}`)
    .on('enter', () => navLink.classList.toggle('active'))
    .on('exit', el => navLink.classList.toggle('active'))
}

['About', 'Projects', 'Skills', 'Quotes', 'Contact'].forEach(navBarHighlight);

// carousel
function moveToSelected(element) {
  console.log(element);
  if (element === "next") {
    var selected = $(".selected").next();
  } else if (element === "prev") {
    var selected = $(".selected").prev();
  } else {
    var selected = element;
  }

  var next = $(selected).next();
  var prev = $(selected).prev();
  // var prevSecond = $(prev).prev();
  // var nextSecond = $(next).next();

  $(selected).removeClass().addClass("selected");

  $(prev).removeClass().addClass("prev");
  $(next).removeClass().addClass("next");

  // $(nextSecond).removeClass().addClass("nextRightSecond");
  // $(prevSecond).removeClass().addClass("prevLeftSecond");
  //
  // $(nextSecond).nextAll().removeClass().addClass('hideRight');
  // $(prevSecond).prevAll().removeClass().addClass('hideLeft');

}

// Key Events
// $(document).keydown(function(e) {
//     switch(e.which) {
//         case 37: // left
//         moveToSelected('prev');
//         break;
//
//         case 39: // right
//         moveToSelected('next');
//         break;
//
//         default: return;
//     }
//     e.preventDefault();
// });

$('#carousel div').click(function() {
  moveToSelected($(this));
});

$('#prev').click(function() {
  moveToSelected('prev');
});

$('#next').click(function() {
  moveToSelected('next');
});


$('#next').click(function() {
  moveToSelected('next');
});
