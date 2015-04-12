(function() {
	"use strict";
	
	var express = require("express"),
        http = require("http"),
        app = express(),
		server;
    
	app.use(express.static(__dirname));
	http.createServer(app).listen(3000);

	console.log("Server running on port 3000");
}());
