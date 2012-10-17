
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http') // require modules as and when needed
  , path = require('path');


var app = module.exports = express(); // see this how to export modules

// Configuration

app.configure(function(){ 
  app.set('port', process.env.PORT || 3000); // set port number to listen
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('view options', {layout: false});
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index); // you can add as many routes here 


//Creates server
http.createServer(app).listen(app.get('port'), function(){
  console.log("Happy birthday! This may not be a great gift - but little thoughtful, isn't it? ;)");
});
