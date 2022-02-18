 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const cart = new Schema({
    course_name:{
        type:String,
        unique:false,
        default:null,
        required:false
    },
    course_image:{
        type:String,
        unique:false,
        default:null,
        required:false
    },
    course_id:{
        type:String,
        unique:false,
        default:null,
        required:false
    },
    email:{
        type:String,
        unique:false,
        default:null,
        required:false
    },
    price:{
        type:String,
        unique:false,
        default:null,
        required:false
    }
 })
 module.exports = mongoose.model("carts",cart)