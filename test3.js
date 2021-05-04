const express = require('express');
const app = express();


app.use('/', express.static('./files')); // replace ./files with the path to the directory holding the file/files you want to make available


app.listen(3000); // :80 is default http port