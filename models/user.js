const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = new Schema({
    name:{
        type: String,
        unique:false,
        default: null,
        required: false
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    phone:{
        type: String,
        required: false,
        unique: false
    },
    password:{
        type: String,
        default: null,
        required: true
    }
})
module.exports = mongoose.model("users",user);