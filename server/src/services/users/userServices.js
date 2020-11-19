// const {emailValidator,registerPasswordValidator,firstNameValidator,
//     lastNameValidator,loginPasswordValidator,isEmailExistValidator}
//      = require('../utility/validator/userValidator');
const User = require('../../models/userModel');
const CustomError = require('../../util/CustomError');
const config = require('../../config/parameter');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const _ = require('lodash');
const Email = require('../../util/mailServices')


class userServices{

  async signUp(req,res){
    let {email,password,firstName,lastName,phone_number,confirm_password} = req.body;
  
    const emailRegex = /[\w|.]+[@]+\w+[.]+[\w|.]*$/gm;
    if (!email) throw new CustomError("please provide your email");
    const isEmailValid = await emailRegex.test(email);
    if (!isEmailValid) {throw new CustomError("please provide a valid email"); }
    if (!firstName || firstName.length<2) throw new CustomError("please provide a valid firstName");
    if (!lastName || lastName.length<2) throw new CustomError("please provide a valid firstName");
    if (!phone_number || isNaN(phone_number) || phone_number.length<6) throw new CustomError("please provide a valid phone number");
    if(!password) throw new CustomError("enter your password", 400,false);
    if(password.length<5) throw new CustomError("password must be more than four character", 400,false);
    if(!confirm_password) throw new  CustomError("please confirm  your password", 400,false);
    if(password  !== confirm_password) throw new CustomError("password dont match", 400,false);
    let isExist = await User.findOne({email:email});
    if(isExist) throw new CustomError('email already exist',400) 
    let payload={ lastName:lastName, 
                 firstName:firstName,
                 email:email,
                 password:password,     
                 phoneNumber:phone_number,     
                }
   const token = jwt.sign(payload, process.env.jwtSecret, {expiresIn: config.accessTokenexpires_expiresIn});
   const  localVerificationlink =` http://localhost:24434/v1/api/user/verifyAccount/${token}`;
   const verificationlink =  `https://${req.hostname}/v1/api/user/verifyAccount/${token}`;
 console.log(verificationlink)
 await new Email(req.body, verificationlink).verify_email();
 await new Email(req.body, localVerificationlink).verify_email();

    return

   };

   async individualSignUp(req,res){


   }
   async co_operativeSignUp(req,res){


  }
   async signIn(req,res){
    let  {email,password} = req.body;
    if(!email)  throw new CustomError("provide an email", 400,false); 
    if(!password) throw new CustomError("provide a password", 400,false); 
    let user =await User.findOne({email:email})
      if(!user) throw  new CustomError("no user found", 404,false); 
      const isCorrect = await bcrypt.compare(password, user.password);
      if(!user.isEmailVerified) throw new CustomError("Account not verify pls verify your email", 400,false); 
      if(user.block) throw new CustomError("your account has been blocked please contact the Admin", 400,false); 
      if(!isCorrect)  throw new CustomError("password incorrect", 400,false);
    else{ let payload={ firstName:user.firstName,lastName:user.lastName, id:user._id,role:user.role, email:user.email,}
    const token = jwt.sign(payload, process.env.jwtSecret, {expiresIn:config.accessTokenexpires_expiresIn });
    // console.log(payload,jwt.decode(token))
      const refreshToken = jwt.sign(payload,process.env.jwtSecret, {expiresIn: config.refreshToken_expiresIn });
user = _.pick(user, [
  "_id",
  'firstName',
  'lastName',
  "email",
  "role"
]);
      return{success:true,  status:200, 
      user,
      token:`Bearer ${token}`, refreshToken:`Bearer ${refreshToken}`}
    }
   };

   async verifyAccount(req,res){
     console.log(config.accessTokenexpires_expiresIn)
     const userId = req.params.userId;
     let ifExp = jwt.decode(userId)
     let verifyJwt = jwt.verify(userId,config.JwtStrategy)
     console.log(verifyJwt)
     let isvalid = await User.findOne({email:verifyJwt.email})
     if(isvalid) throw new CustomError('link expired or link has been used',400)
     let {lastName,firstName,email,password,phoneNumber} = verifyJwt
      let saveUser = new User({email,password,firstName,lastName,phoneNumber});
  saveUser.isEmailVerified=true;
 let save = await saveUser.save()
  return{success:true,  status:200, message:'your account has successfully been verified'}
   }

     
   async updateProfile(req,res){
     let userId = req.user.id;
     let {firstName,lastName,shippingAddress,phone_number} = req.body;
     if (!firstName || firstName.length<2) throw new CustomError("provide your firstName");
     if (!lastName || lastName.length<2) throw new CustomError("provide your lastName");
     if(!phone_number ||isNaN(phone_number) || phone_number<7 )  throw new CustomError('provide your phoneNumber')
     if(!userId)  throw new CustomError('user does not exist');
     let isUser = await User.findById(userId);
     isUser.firstName=firstName;
     isUser.lastName=lastName;
     isUser.shippingAddress=shippingAddress;
     isUser.phoneNumber=phone_number;
     let save = await isUser.save()
    save = _.pick(save,['email','firstName','lastName','photoURL','phoneNumber',"role"])
 return{status:200,save}
  }
    async   getProfile (req,res){
     let userId = req.user.id;
    let isUser = await User.findById(userId)
      isUser = _.pick(isUser,['email','firstName','lastName','photoURL','phoneNumber','role'
    ])
return{status:200,...isUser}
 }
    async    modifyPassword (req,res){
  let isUser = await User.findById(req.user.id);
  if (!isUser) throw new CustomError("you cant modify another user`s password");
  let {newPassword,confirm_newPassword,oldPassword} = req.body;
  if (!oldPassword || oldPassword.length<2) throw new CustomError("provide your old Password");
  if (!newPassword || newPassword.length<2) throw new CustomError("provide your new Password");
  if (newPassword != confirm_newPassword) throw new CustomError("provide password dont match");
  console.log({newPassword,confirm_newPassword,oldPassword})

  const isCorrect = await bcrypt.compare(oldPassword,isUser.password);
  if (!isCorrect) throw new CustomError("you have enter a wrong password");
  isUser.password=newPassword;
   let save = await isUser.save()
  return 

 }
 
 async uploadeDp(req,res){
   return 'updated'
 }

}
module.exports = new userServices();