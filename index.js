const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connect = require('./connection-manager.js')


const port = 3000;
//call mongodb config module
const appStartup = async () => {
    await connect();
    app.listen(port, console.log(`Server is listening on port ${port}`))
}

//middleware 
app.use(express.json())


//routes
app.get(`/hello`, (req, res) => {
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)
appStartup();

