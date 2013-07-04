$('document').ready(function(){
  $('#geobutton').click(determineLocation);
  $('#geobutton2').click(watchPosition);
});

function determineLocation(){
  if (navigator.onLine) {
    if (Modernizr.geolocation) {
      navigator.geolocation.getCurrentPosition(displayOnMap);
    }
    else {
      // geolocation n'est pas supporté
      // Utiliser autre chose (ex : Google Gears ...)
    }
  } else {
    alert("Vous devez être connecté pour Utiliser cette fonctionnalité");
  }
}


function displayOnMap(position){
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  console.log(position);

    // Utilisation de Google Maps pour afficher la position
    var myOptions = {
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    var map = new google.maps.Map(document.getElementById("mapDiv"), myOptions);
    
    var initialLocation = new google.maps.LatLng(latitude, longitude);
    
    var marker = new google.maps.Marker({
      position: initialLocation,
      map: map,
      title: "Hello World!"
    });
    
    map.setCenter(initialLocation);
  }

  function errorFunction(error)
  {
    switch(error.code) {
      case error.TIMEOUT:
      //faire quelque chose pour la gestion du timeout
      break;
      case error.PERMISSION_DENIED:
      alert(error.message);
      break;
    }
  }

  function watchPosition()
  {
    if (navigator.onLine) {
      if (Modernizr.geolocation) {
        /* {maximumAge:60000, timeout:2000} */
        var watchId = navigator.geolocation.watchPosition(displayOnMap,errorFunction);
        $('#geobutton3').click(function(){
          navigator.geolocation.clearWatch(watchId);
        });
      }
      else {
      // geolocation n'est pas supporté
      // Utiliser autre chose (ex : Google Gears ...)
    }
  } else {
    alert("Vous devez être connecté pour Utiliser cette fonctionnalité");
  }
}




