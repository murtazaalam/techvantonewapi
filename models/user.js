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
        type: Number,
        required: true,
        unique: true
    },
    password:{
        type: String,
        default: null,
        required: true
    }
})
module.exports = mongoose.model("users",user);