var net = require('net'); //Handles TCP connection
var fs = require('fs'); //Handles file system


var PORT = 9000;
var HOST = '192.168.4.121';
//TODO implement user input isntead of hardcoding path
var FILEPATH = '/Users/danielmonje/Documents/GitHub/CECS-327-Project/client.js';

var client = new net.Socket()

//connect to the server
client.connect(PORT,HOST,function() {
    'Client Connected to server'

    //TODO implement checksum/hash and getfiles
    //send a file to the server
    var fileStream = fs.createReadStream(FILEPATH);
    fileStream.on('error', function(err){
        console.log(err);
    })

    fileStream.on('open',function() {
        fileStream.pipe(client);
    });

});

//handle closed
client.on('close', function() {
    console.log('server closed connection')
});

client.on('error', function(err) {
    console.log(err);
});