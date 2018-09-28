
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
$('nav a').on('click', function (e) {
  var targetHref = $(this).attr('href');

  $('html, body').animate({
    scrollTop: $(targetHref).offset().top}, 1000);

    e.preventDefault();
});
