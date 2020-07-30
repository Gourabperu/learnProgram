const mongoose = require('mongoose');



const user = new mongoose.Schema({
    name: String,
    email: String,
    username:String,
   // companyName:String,
    
    createAt:{
        type:Date,
        default:Date.now
    }
});

const UserModel = mongoose.model("user",user);
module.exports=UserModel;

