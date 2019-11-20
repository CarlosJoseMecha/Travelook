función initMap () {
    mapa var = new google.maps.Map (document.getElementById ('mapa'), {
      zoom: 8,
      centro: {lat: -34.397, lng: 150.644https://jsfiddle.net/api/post/library/pure/#}
    });
    geocoder var = nuevo google.maps.Geocoder ();
  
    document.getElementById ('submit'). addEventListener ('click', function () {
      geocodeAddress (geocodificador, mapa);
    });
  }
  
  función geocodeAddress (geocoder, resultsMap) {
    var address = document.getElementById('address').value;
    geocoder.geocode({'address': address}, function(results, status) {
      if (status === 'OK') {
        resultsMap.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }