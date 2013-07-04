
$('document').ready(function(){
	// TODO : Que faut-il appeler ici pour charger les données depuis le localStorage
	// au chargement de la page ?

	//$('#name,#firstname,#email').blur(saveData);
	$('#sesouvenirdemoi').change(saveData);
});

function loadStoredDetails(){
	if (Modernizr.localstorage) {
		// TODO : Récupérer les données depuis le localStorage
		var name = null;
		var firstName = null;
		var email = null;
		var sesouvenirdemoi = null;

		if (name) {
			$("#name").val(name);
		}

		if (firstName) {
			$("#firstname").val(firstName);
		}

		if (email) {
			$("#email").val(email);
		}

		if (sesouvenirdemoi === "true")
		{
			$("#sesouvenirdemoi").prop("checked", true);
		}
	}
	else {
			// Pas de support HTML5 natif pour l'api Storage
		}
		
	}

	function saveData(){
		if (Modernizr.localstorage) {
			// saveData est appelé à chaque fois que la checkbox change
			// On vérifie donc que la case est bien sur l'état coché ("checked")
			if ($("#sesouvenirdemoi").prop("checked")) {				
				var name = $("#name").val();
				var firstName = $("#firstname").val();
				var email = $("#email").val();

				// TODO : Sauvegarder les données ICI
			}
			localStorage.setItem("sesouvenirdemoi", ''+($("#sesouvenirdemoi").prop("checked")));
		}
		else {
			// Pas de support HTML5 natif pour l'api Storage
		}
	}	