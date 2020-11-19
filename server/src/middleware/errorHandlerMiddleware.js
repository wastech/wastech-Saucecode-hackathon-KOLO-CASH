   

const express = require('express')
const app = express();
const CustomError = require("../util/CustomError");
const response = require("../util/response")

class  errorHandler{

       errorHandler=(app)=>{ 
  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    throw new CustomError("Invalid request", 400)
})
app.use((error, req, res, next) => {
   switch (true) {
        case error instanceof CustomError :
            res.status(error.status).json(response( error.message, null,false))
            break;
            case error.message == 'jwt malformed' :
                res.status(400).json(response( 'invalid token, please make use  the right link', null,false))
                break;
        case error.name == 'SyntaxError' :
            res.status(400).json(response( error.message, null,false))
            break;
           //
        case error.name == 'JsonWebTokenError' :
            res.status(400).json(response( error.message, null,false))
            break;
       case error.message == 'getaddrinfo ENOTFOUND smtp.gmail.com' || error.message =='getaddrinfo ENOTFOUND api.paystack.co':
            res.status(400).json(response( 'please check your internet connection ', null,false))
            break;
       
            case error.message == 'Request failed with status code 404' :
                res.status(400).json(response( error, null,false))
                break;
         case error.name == 'CastError' :
            res.status(400).json(response( "Invalid ID", null,false))
            break;    
        case error.name == 'ValidationError' :
            res.status(400).json(response( error.message, null,false))
            break;
       default:
           res.status(500).json(response( error.message, null,false))
           break;
   }
})
 }

}
 module.exports = new errorHandler();

 