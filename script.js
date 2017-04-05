var request;

// TO check if browser API has an XHR object
// Mostly used to support older browser
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObject("Microsoft.XMLHTTP");
}

// 1st parameter is GET or POST method
// 2nd parameter is the location of data file
// 3rd parameter is a boolean that specifies whether we want the request to be asynchronous or not
// false = synchronous request (dont add anything for asynchronous)
request.open('GET', 'data.xml');

request.onreadystatechange = function() {
	if (request.status === 200 && request.readyState === 4) {
		/*You can also target specific unordered list tag by getting the index of the getElementsByTagName
		You can target specific index element of the list tag

		var modify = document.getElementsByTagName('ul')[1].getElementsByTagName('li');

		modify[2].innerHTML = request.responseText;

		var modify = document.getElementsByTagName('li');

		for (var i = 0; i < modify.length; i++) {
			modify[i].innerHTML = request.responseText;
		}*/

		// FOR XML
		console.log(request.responseXML.getElementsByTagName('name')[1].firstChild.nodeValue);

		var items = request.responseXML.getElementsByTagName('name');

		var output = '<ul>';

		for (var i = 0; i < items.length; i++) {
			output += '<li>' + items[i].firstChild.nodeValue + '</li>';
		}

		output += '</ul>';

		document.getElementById('update').innerHTML = output;
	}
}

request.send();

