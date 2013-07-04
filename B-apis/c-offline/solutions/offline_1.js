$('document').ready(function() {

  status();
  // En général, online est vrai quand on est connecté à réseau
  // Cela ne signifie pas qu'il y a une connexion internet
  $(window).on('online',status);
  $(window).on('offline',status);

  function status()
  {
    console.log('Test : '+navigator.onLine);
    $('#status').removeClass("online offline").addClass(navigator.onLine ? 'online' : 'offline');
  }

});

