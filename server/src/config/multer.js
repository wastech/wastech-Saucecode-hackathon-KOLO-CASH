const express = require('express');
const path = require('path')
const app = express();
const multer= require('multer')
const CustomError= require('../util/CustomError')
require('express-async-errors')

//set storage engine
const error = [];


const storage = multer.diskStorage(
    {destination:"./uploads/",
    filename:(req,file,cb)=>{
        cb(null,file.fieldname + "-"+ Date.now()+
        path.extname(file.originalname))
    }}
)

//init uload
const upload=multer({
    storage:storage,
    limits:{fileSize:1000000},
    fileFilter:(req,file,cb,res)=>{
        checkFileType(file,cb,res)

    }
})
 
//check file type
checkFileType=(file,cb,res)=>{
    //allowe exit
    const filetypes = /jpeg|jpg|png|pdf|gif/;
    // check ext
    const extname= filetypes.test(path.extname(file.originalname)
    .toLowerCase())

    //check mime
    const mimetype = filetypes.test(file.mimetype) 

    if(mimetype && extname){
        return cb(null,true)
    }else{
        cb(null, false);
        return cb(new CustomError('Only .png, .jpg and .jpeg format allowed!'))
        

    }
}

if (error.length<2) console.log(error)
module.exports= upload;