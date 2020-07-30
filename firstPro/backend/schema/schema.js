const mongoose = require('mongoose');

const user = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    createAt: {
        type:Date,
        Default:Date.now 

    }
})

const userModel =mongoose.model('t_user',user)

module.exports =userModel;