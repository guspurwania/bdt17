var http = require('http');
var url = require('url');
var port = parseInt(process.argv[2]);

function getTimestamp(time)
{
	return Date.parse(time);
}

function parsetime(time)
{
	var date = new Date(getTimestamp(time));

	return {
		hour: date.getHours(), 
		minute: date.getMinutes(), 
		second: date.getSeconds()
	};
}

function unixtime(time)
{
	return {
		unixtime: getTimestamp(time)
	};
}

var router = {};
router['/api/unixtime'] = unixtime;
router['/api/parsetime'] = parsetime;

var server = http.createServer(function(req, res){
	var urlReq = url.parse(req.url, true);
	var path = url.parse(req.url, true).pathname;

	if(typeof(router[path] === 'function')){
		res.writeHead(200, {'Content-Type':'application/json'});
		var time = urlReq.query.iso;
		return res.end(JSON.stringify(router[path](time)));
	}
	else {
		res.writeHead(404, {'Content-Type':'text/plain'});
		res.end('404 Not Found');
	}
});
server.listen(port);

