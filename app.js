var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var statuses  = require('./routes/statuses');
var types  = require('./routes/types');
var licenses  = require('./routes/licenses');


var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', routes);
app.use('/statuses', statuses);
app.use('/types', types);
app.use('/licenses', licenses);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function(err, req, res, next) {
    res.json({
        status: err.status || 500,
        message: err.message,
        error: (app.get('env') === 'development') ? err : {}
    });
});


module.exports = app;
