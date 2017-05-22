var fs = require('fs');
var path = require('path');
var file = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(file, function(err, data){
	if (err) return console.error(err);
	data.forEach(function(filename){
		var ext2 = path.extname(filename);
		if(ext == ext2)
		{
			console.log(filename);
		}
	})
})
