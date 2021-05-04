//###########################################################
//
// getfiles.js
//
// Author:
//
// Description: getFileArray returns an array of files within
// the directory passed as a parameter to function.
//
//###########################################################

var fs = require('fs');
var path = require('path');

function getFileArray(dir)
{
	var fileNames = [];
	fs.readdirSync(dir).forEach( file => { //For each entry in a directory listing
		if(fs.statSync(path.join(dir, file)).isDirectory())
		{
			//If its a directory, then call the function again on that directory.
			var subFiles = [];
			getFileArray(path.join(dir, file)).forEach( subFile => {
				//For each file returned, add the folder name before hand.
				subFiles.push(path.join(file, subFile));
			});

			//Add the files returned by that call to our current list of files.
			fileNames = fileNames.concat(subFiles);
		}
		else
		{
			//If not a directory, then just add it to the list
			fileNames.push(file);
		}
	});
	//Return a deep copy of the fileNames array;
	return [...fileNames];
}

module.exports = { getFileArray };