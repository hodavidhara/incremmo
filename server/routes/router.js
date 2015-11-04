"use strict";
var router = require('koa-router')();
var send = require('koa-send');
var body = require('koa-body')();
var passport = require('../middleware/auth');
var UserService = require('../service/UserService.js');

router.get('/', function *() {
    yield send(this, '/client/index.html');
});

router.post('/register', body, function *() {
    var user = {};
    user.username = this.request.body.username;
    user.email = this.request.body.email;
    user.password = this.request.body.password;
    this.body = yield UserService.createUser(user);
});

router.post('/login', body, passport.authenticate('local'), function *() {
    this.body = this.req.user;
});

router.get('/logout', function *() {
    this.logout();
    this.redirect('/');
});

router.get('/user', function *() {
    if (this.isAuthenticated()) {
        this.body = this.req.user;
    } else {
        this.status = 401;
    }
});

module.exports = router;