const mongoose = require('mongoose');
const config = require('../config/parameter');

const catModel = require('../models/categoriesModel');
const userModel = require('../models/userModel');
const Org = require('../models/organisation');
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  };
  let  seed = async ()=>{

    mongoose.connect(config.localdatabaseURI,options)
    .then(() => {
        console.log("database established")
    })
    .catch(err => {
        console.log("There was an error while connecting to the database.")
    })
    let catName = ['phones and accessories','computing', 'electronics', 'home and office', 'power'];
    let orgName = ['individual','company'];
    for(let i=0; i<catName.length;i++){
    let isExist =await  catModel.findOne({catName:catName[i]});
        if(isExist) console.log(` ${isExist.catName} category already  seeded`);
        else{
    let cat= new catModel({catName:catName[i]})
    cat.save();
    console.log(`${catName[i]} categgory seeded successfully`)
}
    }
    for(let i=0; i<orgName.length;i++){
        let isExist =await  Org.findOne({organisation:orgName[i]});
        if(isExist) console.log(` ${isExist.organisation} organisation already  seeded`);
        else{
    let cat= new Org({organisation:orgName[i]})
    cat.save();
    console.log(`${orgName[i]} categgory seeded successfully`)
    }
  }
}
  seed()
