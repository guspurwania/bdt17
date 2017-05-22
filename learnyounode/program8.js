var http = require('http');
var str = "";

http.get(process.argv[2], function(response){
	response.setEncoding('utf8');
	response.on('data', function(input){
		str = str.concat(input);
	});
	response.on('end', function(){
		console.log(str.length);
		console.log(str);
	})
}).on('error', console.error);