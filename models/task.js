const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Name field cannot be empty'],
        trim: true
    },
    completed:{
        type: Boolean,
        default: false
    }
    // img:
    // {
    //     data: Buffer,
    //     contentType: String
    // }
});

module.exports = mongoose.model('Task', TaskSchema);