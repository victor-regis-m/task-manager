async function connect(){
    const mongoose = require('mongoose');
    const configs = require("./config.json");
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }  
    const connectionString = configs.MongoDBConnString || "";
    return await mongoose.connect(connectionString, options)
}

module.exports = connect();