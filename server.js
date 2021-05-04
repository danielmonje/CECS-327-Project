//###########################################################
//
// server.js
//
// Author: Daniel & Johnathan
//
// Description: This file creates the server that will listen to 
// the port and sync up with clients.
//
//###########################################################

var net = require('net');
var fs = require('fs');
var buffer = require('buffer');

//Establishes a server
var server = net.createServer(function(conn) {
    console.log('server connected');

    conn.on('data', function(data) {
        console.log('data received');
        console.log('data is: \n' + data);
    });

    //Creates a stream to write the files
    var fileStream = fs.createWriteStream(FILEPATH + '.txt');
    conn.pipe(fileStream);
});

var HOST = '192.168.4.121';
var PORT = '9000'
var FILEPATH = '/Users/danielmonje/Downloads';


//Server is listening
server.listen(PORT, HOST, function() {
    console.log('server bound to ' + PORT + '\n');

    server.on('connection', function(){
        console.log('connection made...\n')
    })
});