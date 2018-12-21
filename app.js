var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var logger = require('./utils/logs')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var winston = require('winston'),
  expressWinston = require('express-winston');
var WinstonGraylog2 = require('winston-graylog2');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//logger 

app.use(expressWinston.logger({
  exitOnError: false,
  transports: [
  new(WinstonGraylog2)(
    {
      name: 'Graylog',
      level: 'debug',
      silent: false,
      handleExceptions: false,
      prelog: function(msg) {
        return msg.trim();
      },
      graylog: {
        servers: [{ 'host': process.env.graylogServer, port: process.env.graylogPort }],
        hostname: process.env.graylogHostName,
        facility: process.env.graylogFacility,
        bufferSize: 1350
      },
      staticMeta: {env: 'staging'}
    }
  )],
  meta: true, // optional: control whether you want to log the meta data about the request (default to true)
  msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
  expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
  colorize: false, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
  ignoreRoute: function (req, res) { return false; } // optional: allows to skip some log messages based on request and/or response
}));




app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
