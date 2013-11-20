function createFileFromString(name, baseUri, callbackSuccess, callbackError, callbackDone) {
	var stringData = '@prefix ldp: <http://www.w3.org/ns/ldp#> .\n'+
		'@prefix foaf: <http://xmlns.com/foaf/0.1/> .\n'+

		'<> a ldp:Ressource;\n'+
		'foaf:topic "A File for some type X of resources"; \n'+
		'foaf:maker <../card#me> . \n';

	$.ajax({
		type: "POST",
		url: baseUri,
		dataType: "text",
		contentType:"text/turtle",
		processData:false,
		data: stringData,
		headers: {"Slug": name},
		success: function(data, status, xhr) {
			if (callbackSuccess) callbackSuccess()
		},
		error: function(xhr, status, error) {
			if (callbackError) callbackError()
		}
	})
		.done( function() {
			if (callbackDone) callbackDone()
		});
}