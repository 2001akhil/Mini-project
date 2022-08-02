var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs=require('express-handlebars');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var hod=require('./routes/hod')
var faculty=require('./routes/faculty')
var student_phase =require('./routes/phase1')
var request=require('./routes/request')
// var request=require('./routes/display')


var db=require('./config/db');
var session=require('express-session');
const { hasSubscribers } = require('diagnostics_channel');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs',hbs.engine({extname:'hbs',defaultLayout:'layout',layoutsDir:__dirname+'/views/',partialsDir:__dirname+'/views/partials'}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret:"key",cookie:{maxAge:6000000*8000+6554}}))

db.connect((err)=>{
  if(err)
  console.log("connection error"+err)
  else
  console.log("connected")

})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/hodmain',hod);
app.use('/faculty',faculty)
app.use('/phase1',student_phase)
app.use('/request',request)
// app.use('/display',display)


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
