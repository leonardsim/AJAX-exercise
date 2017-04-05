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
request.open('GET', 'data.txt');

request.onreadystatechange = function() {
	if (request.status === 200 && request.readyState === 4) {
		console.log(request);	
		document.writeln(request.responseText);
	}
}

request.send();

