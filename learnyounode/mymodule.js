module.exports = function(file, filter, callback) {
	var fs = require('fs');
	var path = require('path');
	var out = [];
	var ext = '.' + filter;

	fs.readdir(file, function(err, data){
		if (err) return callback(err);
		data.forEach(function(filename){
			var ext2 = path.extname(filename);
			if(ext == ext2)
			{
				out.push(filename);
			}
		})
		return callback(null, out)
	})
}