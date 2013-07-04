$('document').ready(function() {
  // Bind de l'�v�nement dragstart (sur l'objet draggable)
  $('#badgesContainer img').on('dragstart', function(event) {
    // On r�cup�re l'id de l'�l�ment draggable pour le faire transiter dans l'objet dataTransfer
    // Remarque : Utilisation de originalEvent (jQuery)
    event.originalEvent.dataTransfer.setData("text/plain", event.target.getAttribute('id'));
  });
  
  // Bind du dragover sur la drop zone (bigHtml5)
  $('#bigHtml5').on('dragover', function(event) {
    console.log("DragOver");
  // Indispensable pour que la zone accepte le drop
  event.preventDefault();
});
  
  // Bind du drop sur la drop zone (bigHtml5)
  $('#bigHtml5').on('drop', function(event) {
    var mouseHash = {};
    mouseHash['A'] = "A :-)";
    mouseHash['B'] = "B !";
    mouseHash['C'] = "C /!\\";

  var displayText = document.getElementById('displayText');

  // On r�cup�re l'id que l'on a fait transit� via l'objet dataTransfer
  var draggableItemId = event.originalEvent.dataTransfer.getData("text/plain");
  // On modifie le texte de la zone d'affichage en cons�quence
  displayText.innerHTML = mouseHash[draggableItemId]; 
  
  // On supprime l'image de sa place puisqu'elle est "drop�e"
  var mousey = document.getElementById(draggableItemId);
  mousey.parentNode.removeChild(mousey);
  
  event.preventDefault();
});
});

