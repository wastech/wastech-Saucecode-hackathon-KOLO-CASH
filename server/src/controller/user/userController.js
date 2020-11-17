const userServ = require('../../services/users/userServices')
const response = require('../../util/response')

class userController{

    async signUp(req,res){
    let data =  await userServ.signUp(req,res)
       res.json(response(
        'A message has been to your email, please click the link to verify your accout as the link expires in an hour after registeration',data,true))
     };
     async verifyAccount(req,res){
      let data =  await userServ.verifyAccount(req,res)
         res.json(response(
          'your account has been verified',data,true))
       };
  
  async signIn(req,res){
   let data =  await userServ.signIn(req,res)
      res.json(response(
       'user successfully logged in',data,true))
    };
  async getProfile(req,res){
   let data =  await userServ.getProfile(req,res)
      res.json(response(
       'profile fetched',data,true))
    };

    
  async modifyPassword(req,res){
   let data =  await userServ.modifyPassword(req,res)
      res.json(response(
       'password modified successfully',data,true))
    };

   
    async updateProfile(req,res){
      let data =  await userServ.updateProfile(req,res)
         res.json(response(
          'profile updated succesfully',data,true))
       };
       
       async uploadeDp(req,res){
         let data =  await userServ.uploadeDp(req,res)
            res.json(response(
             'profile updated succesfully',data,true))
          };
}



module.exports = new userController();
