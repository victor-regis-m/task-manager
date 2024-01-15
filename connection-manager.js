async function connect(){
    const mongoose = require('mongoose');
    const configs = require("./config.json");
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }  
    const connectionString = configs.MongoDBConnString || "";
    return await mongoose
                    .connect(connectionString, options)
                    .then(() => console.log("Connected to database sucessfully"))
                    .catch((err) => console.log(err))
}

module.exports = connect;