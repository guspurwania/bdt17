var fs = require('fs');
var file = process.argv[2];
var ext = process.argv[3];

var mymodule = require('./mymodule.js');
mymodule(file, ext, function(err, data){
	if(err){
		console.log(err);
	}
	data.forEach(function(entry){
		console.log(entry);
	})
})