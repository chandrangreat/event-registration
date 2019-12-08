// var createError = require('http-errors');
// // var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// // ---------------

// const authRouter = require('./api/auth/index');



const express = require('express');

function generateApp(inputApp) {
  const app = inputApp || express();

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
  });

  app.use(require('./api'));

  return app;
}

module.exports = generateApp;