var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Route handlers
var tripsRouter = require('./routes/trips');
var authRouter = require('./routes/auth');
var trackpointsRouter = require('./routes/trackpoints');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// routes
app.use(express.static(path.join(__dirname, 'public'))); //DEVELOPMENT
app.use('/api/trips', tripsRouter);
app.use('/api/auth', authRouter);
app.use('/api/trackpoints', trackpointsRouter);


// protected routes
// app.use('/api/mytrips', tripsRouter);


// DEPLOYMENT TO PRODUCTION: (execute in client: npm run build)
// if (process.env.NODE_ENV === 'production') {
//   console.log("This is serious! You are in production mode")
//   app.use(express.static(path.join(__dirname, '../client/build')));
//   app.get('*', function(req, res) {
//     console.log(req.path)
//     res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
//   });
// } else {
//   console.log("You are in development mode. Do not expect to receive anything updated from React. User dev server for your frontend!!!")
// }


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
});

module.exports = app;
