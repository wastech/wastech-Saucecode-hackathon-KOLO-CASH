const CustomError = require('./CustomError');
const User = require('../models/userModel');
const mongoose = require('mongoose');

class validator{

    async idValidator(productId){
        let isValidId = mongoose.Types.ObjectId.isValid(productId)
        if(productId == " " || productId===undefined || !isValidId){
           throw new CustomError('please provide a valid id',400)
        }
        }
        async ad_to_cart(productId){
            let isValidId = mongoose.Types.ObjectId.isValid(productId)
            if(productId == " " || productId===undefined || !isValidId){
               throw new CustomError('please provide a valid id',400)
            }
      }
      async registerPasswordValidator(password,email){
         if(!password  ) throw new CustomError("enter your password", 400,false);
         if( password.length<4 ) throw new CustomError("password must be more than four characters", 400,false);
         for(let p = 0;p<password.length;p++){
            if(pass) k

         }
     }


     async addPhotoTOPath(req){
      if(!req.files) throw new CustomError('please upload atleast a image ');
      let url = []
      for(let i=0;i<req.files.length;i++){
        url.push( req.files[i].path);
        req.body['photoURL']=url;
        }
        console.log(url)
  }
   
}


module.exports = new validator();
