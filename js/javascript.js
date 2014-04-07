var geocoder;
var map;
var venue_lat = -34.89776 ;
var venue_long = -56.16710;

function initialize() {
  // Check if coordinates are available
  coordinates_available = venue_lat != null && venue_long != null

   // Check if the map should be draggable
  var isDraggable = $(document).width() > 450 ? true : false;
  
  // Set map options
  var mapOptions = {
    zoom: 13,
    draggable: isDraggable,
    scrollwheel: false
  };

  // Instantiate the map
  map = new google.maps.Map(document.getElementById('map'), mapOptions);

  // Center the map
  if (coordinates_available) {
    map.setCenter(new google.maps.LatLng(venue_lat,venue_long));
    placeMarker(map);
  }
}

// Place a marker
function placeMarker(map) {
  new google.maps.Marker({
    map: map,
    position: map.center
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
