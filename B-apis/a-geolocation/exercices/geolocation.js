$('document').ready(function(){
  // Appeler determineLocation lors du click sur #geobutton
  // Appeler watchPosition lors du click sur #geobutton2
  // Aide : Utiliser jQuery
});

function determineLocation(){
  if (navigator.onLine) {
    // TODO : Si Modernizr.geolocation est disponible,
    // utiliser la méthode getCurrentPosition
    // pour afficher la carte (voir displayOnMap)
  } else {
    alert("Vous devez être connecté pour Utiliser cette fonctionnalité");
  }
}

/* Affichage de la carte Google Maps */
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
      
        // TODO : 1. Utiliser watchPosition de l'API geolocation
        // si l'api est disponible
        // Rappel : watchPosition fonctionne comme getCurrentPosition
        // 2. Utiliser errorFunction comme callback d'erreur
        // 3. Passer des options ({maximumAge:60000, timeout:2000})
        // A votre avis, comment tester le changement des options ?
        // 4. Comment arrêter le suivi de la position (3ème bouton) ?
        
      } else {
        alert("Vous devez être connecté pour Utiliser cette fonctionnalité");
      }
    }




