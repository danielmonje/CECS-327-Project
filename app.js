//###########################################################
//
// app.js
//
// Author:
//
// Description: Main entry point for our application.  It sets
// up the Express instance and handle requests for commands.
//
//###########################################################


// Import and initialize all variables that we need.
var express = require('express'); 	// Load the Express builder fcn.
var app = express(); 				//Init an Express object.
const path = require('path');		//Include path
var fs = require('fs');				//Include filesystem





app.listen(3000, function () { // Set callback action function on network port.
	console.log('app.js listening on port 3000!');
});