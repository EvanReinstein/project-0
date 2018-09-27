
// Map
map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 37.78, lng: -122.44},
  zoom: 8,
  mapTypeId: 'terrain'
});


// Smooth Scroll
$('nav a').on('click', function (e) {
  var targetHref = $(this).attr('href');

  $('html, body').animate({
    scrollTop: $(targetHref).offset().top}, 1000);

    e.preventDefault();
});
