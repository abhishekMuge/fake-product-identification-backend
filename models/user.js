const mongoose = require("mongoose");
var conn = mongoose.Collection;

var UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    type_of: {
        type:String,
        required: true
    },
    phone_number: {
        type:String,
        required: true
    },
    account_address: {
        type:String,
        required: true
    },
    password: {
        type:String,
        required: true
    }
},
{ timestamps: true }
);

var User=mongoose.model('User',UserSchema);
module.exports=User;