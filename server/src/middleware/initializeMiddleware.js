const express = require("express");
const indexRouter=require('../routes/index')
const passport = require('passport');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");
var corsOption = {
  origin: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  exposedHeaders: ["x-auth-token"],
};

module.exports=(app)=>{
    app.use(passport.initialize())
    require("../config/passport")(passport)
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(cors(corsOption));
    app.use(express.static(path.join(__dirname, '../../public')));
    // app.get('*',(req,res)=>{
    //   res.sendFile(path.join(__dirname,'../../public/index.html'))
    //   })
   
    app.use('/v1/api', indexRouter);
    

    return app;

}