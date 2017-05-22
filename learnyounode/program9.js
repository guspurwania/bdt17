var http = require('http');
var bl = require('bl');
var results = [];
var count = 0;

function showResult() {
	for (var i = 0; i < 3; i++) {
		console.log(results[i]);
	}
}

function getHTTP(index) {
	http.get(process.argv[2 + index], function(response){
		response.pipe(bl(function(error, data){
			if(error)
				return console.error(err);

			results[index] = data.toString();
			count++;

			if(count == 3)
			{
				showResult();
			}
		}))
	})
}

for (var i=0; i < 3; i++)
	getHTTP(i);