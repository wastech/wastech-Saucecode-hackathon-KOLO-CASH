const mongoose = require('mongoose');
let config = require('./parameter');

const uri = config.localdatabaseURI

const dbOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};

 exports.database=()=>{
    mongoose
            .connect(uri, dbOptions)
            .then(() => console.log(`{Connected to database}`,config.localdatabaseURI))
            .catch((error) => console.log(":: {Couldn't connect to database} "));
}

