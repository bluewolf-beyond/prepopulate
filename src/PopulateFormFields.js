//
// PopulateFormFields.js
//
//   Utility functions to populate form fields with the URL parameters.
//
// 2011 June 30		Andrew Couch	initial development

function getUrlParameters( locationSearch )
{
	var params = locationSearch.substring(1).split("&"),
	    retval = Array();

	jQuery.each(params, function(index, param){

		var pair = param.split("=");

		retval.push({ name: decodeURIComponent(pair[0]), value: decodeURIComponent(pair[1]) });

	});

	return retval;
}

function populateFormFields( parameterArray )
{
	jQuery.each(parameterArray, function(index, param){

		var $formField = jQuery("#" + param.name);

		if (1 !== $formField.length){

			$formField = jQuery("[name='" + param.name + "']");

		}

		if (1 === $formField.length){

			$formField.val( param.value );

		}

	});
}

function autoPopulateFormFields(){

	populateFormFields( getUrlParameters( window.location.search ) );

}

