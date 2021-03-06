//###########################################################
//
// client.js
//
// Author: Daniel & Johnathan
//
// Description: 
//
//###########################################################

var net = require('net');
var fs = require('fs');

//TODO implement user input instead of hardcoding path and IP/port finder to find other clients
var PORT = 9000;
var HOST = '192.168.4.121';
var FILEPATH = '/Users/danielmonje/Documents/GitHub/CECS-327-Project/client.js';

var client = new net.Socket()

//Connect to the server
client.connect(PORT,HOST,function() {
    'Client Connected to server'

    //TODO implement checksum/hash and getfiles
    //Send a file to the server
    var fileStream = fs.createReadStream(FILEPATH);
    fileStream.on('error', function(err){
        console.log(err);
    })

    fileStream.on('open',function() {
        fileStream.pipe(client);
    });

});

//Handle closed
client.on('close', function() {
    console.log('server closed connection')
});

client.on('error', function(err) {
    console.log(err);
});