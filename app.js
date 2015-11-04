"use strict";

var koa = require('koa');
var app = koa();

// Start connection to mongo.
var connection = require('./server/service/MongoConnection');

// Serve static files.
var serve = require('koa-static');
app.use(serve('dist'));

// Register session.
var session = require('koa-session');
app.keys = ['secret'];
app.use(session(app));

// Register passport.
var passport = require('./server/middleware/auth');
app.use(passport.initialize());
app.use(passport.session());

// Routes must be defined after passport is set up.
var router = require('./server/routes/router');
app.use(router.routes());
app.use(router.allowedMethods());

var server = require('http').createServer(app.callback());

var io = require('socket.io')(server, {serveClient: false});
require('./server/sockets/chat')(io);

server.listen(3000, function () {
    console.log('server started up.');
});