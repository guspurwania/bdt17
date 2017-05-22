var net = require('net');
var strftime = require('strftime');

console.log("starting server at port " + process.argv[2]);

var server = net.createServer(function(socket){
	socket.end(strftime('%Y-%m-%d %H:%M\n'));
});
server.listen(process.argv[2]);