 
  $(document).ready(function(){

	var params = [
			{ name: "anInput", value: "Some input value" },
			{ name: "otherInput", value: "Another test value" },
			{ name: "radioInput", value: "two" }
	];

test("Get URL parameters from string", function() {

	var queryString = "?";

	jQuery.each( params, function(index,param){

		if ( "?" !== queryString ) queryString += "&";
		queryString += encodeURIComponent(param.name) + "=" + encodeURIComponent(param.value);

	});

	var returnValue = getUrlParameters( queryString );

	equal( returnValue.length, params.length, 'An array entry should be returned for each URL parameter.' );

	deepEqual( returnValue, params, 'Each parameter should be successfully extracted.' );

});

test("Populate appropriate fields on page", function() {

	var expectedAnInputValue, expectedOtherInputValue, actualAnInputValue, actualOtherInputValue;

	jQuery.each(params, function(index, param){

		if ("anInput" == param.name) expectedAnInputValue = param.value;
		if ("otherInput" == param.name) expectedOtherInputValue = param.value;

	});

	populateFormFields( params );

	actualAnInputValue = jQuery("#anInput").val();
	actualOtherInputValue = jQuery("#otherInput").val();

	equal( actualAnInputValue, expectedAnInputValue, 'Input fields should be populated.' );
	equal( actualOtherInputValue, expectedOtherInputValue, 'Input fields should be populated.' );

});

  });
