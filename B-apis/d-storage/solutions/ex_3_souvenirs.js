
$('document').ready(function(){
	loadStoredDetails();
	//$('#name,#firstname,#email').blur(saveData);
	$('#sesouvenirdemoi').change(saveData);
});

function loadStoredDetails(){
	if (Modernizr.localstorage) {
		var name = localStorage.getItem("name");
		var firstName = localStorage.getItem("firstname");
		var email = localStorage.getItem("email");
		var sesouvenirdemoi = localStorage.getItem("sesouvenirdemoi");

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

				// Préférer cette première notation
				localStorage.setItem("name", name);
				localStorage.setItem("firstname", firstName);
				//localStorage.setItem("email", email);
				localStorage["email"] = email;
			}
			localStorage.setItem("sesouvenirdemoi", ''+($("#sesouvenirdemoi").prop("checked")));
		}
		else {
			// Pas de support HTML5 natif pour l'api Storage
		}
	}	