// Modules
var express = require('express');
var app = express();
var piREST = require('pi-arest')(app);

// Set unique ID
piREST.set_id('1230alakf04');
piREST.set_name('Priz');

// Connect to cloud.aREST.io
piREST.connect();

// Start server
var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
