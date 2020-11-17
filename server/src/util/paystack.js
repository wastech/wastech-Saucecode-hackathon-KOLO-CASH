const CustomError = require('./CustomError');
const User = require('../models/userModel');
const mongoose = require('mongoose');
const request= require('request');
const MySecretKey = 'Bearer sk_test_f7beb8c628e82cd91124647082fb6a56d7402060';

class paystack{

    async createPlan (form, mycallback){
        form.interval="monthly"
        const options = {
            url : 'https://api.paystack.co/plan',
            headers : {
                authorization: MySecretKey,
                'content-type': 'application/json',
                'cache-control': 'no-cache'    
            },
            form
        }
        const callback = (error, response, body) => {
            if(body)
            return mycallback( body)
            if(error)
            return mycallback(error)



        }
      await  request.post(options, callback)
    }
    
  async  initializePayment(form,mycallback){
      

    const options = {
        url : 'https://api.paystack.co/transaction/initialize',
        headers : {
            authorization: MySecretKey,
            'content-type': 'application/json',
            'cache-control': 'no-cache'    
        },
        form
    }
    const callback = (error, response, body) => {
        // return mycallback(error, body)
        if(body)
            return mycallback( body)
            if(error)
            return mycallback(error)
    }
   await request.post(options, callback)

             

 }

        
       
   

      
  







}


module.exports = new paystack();
