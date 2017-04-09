// Working with JQuery
$.getJSON('data.json', function(data) {
	var output = '<ul>';

	// key is the index
	$.each(data, function(key,val) {
		output += '<li>' + val.name + '</li>';
	});

	output += '</ul>';
	$('#update').append(output);
});