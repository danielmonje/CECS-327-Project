var net = require('net');
var fs = require('fs');
var buffer = require('buffer');

var server = net.createServer(function(conn) {
    console.log('server connected');

    conn.on('data', function(data) {
        console.log('data received');
        console.log('data is: \n' + data);
    });

    let fileStream = fs.createWriteStream(FILEPATH + 'output.bin');
    conn.pipe(fileStream);
});

var HOST = '192.168.4.121';
var PORT = '9000'
var FILEPATH = '/Users/danielmonje/Downloads';


server.listen(PORT, HOST, function() {
    //listening
    console.log('server bound to ' + PORT + '\n');

    server.on('connection', function(){
        console.log('connection made...\n')
    })
});