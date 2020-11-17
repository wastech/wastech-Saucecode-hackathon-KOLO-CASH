const adminServ = require('../../services/admin/adminServices')
const response = require('../../util/response')

class adminController{

    async uploadItem(req,res){
    let data =  await adminServ.uploadItem(req,res)
      res.json(response(
        'item uploaded',data,true))
     };
 
     
     async addOrganisation(req,res){
      let data =  await adminServ.addOrganisation(req,res)
         res.json(response(
          'organisation added',data,true))
       };

    
       async addAnotherAdmin(req,res){
        let data =  await adminServ.addAnotherAdmin(req,res)
           res.json(response(
            'admin added',data,true))
         };
         async dashboard(req,res){
            let data =  await adminServ.dashboard(req,res)
               res.json(response(
                'dashboard fetch',data,true))
             };
             async listTransactions(req,res){
               let data =  await adminServ.listTransactions(req,res)
                  res.json(response(
                   'Transactions retrieved',data,true))
                };

                async listEachTransactions(req,res){
                  let data =  await adminServ.listEachTransactions(req,res)
                     res.json(response(
                      'Transactions retrieved',data,true))
                   };
}
// 

module.exports = new adminController();
