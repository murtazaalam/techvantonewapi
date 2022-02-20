const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orders = new Schema({
    user_id:{ 
        type:String,
        unique:false,
        default:null,
        required:false
    },
    total_amount:{
        type:String,
        unique:false,
        default:null,
        required:false
    },
    payment_status:{
        type:String,
        unique:false,
        default:null,
        required:false
    },
    cart_item:{
        type:Array,
        unique:false,
        default:null,
        required:false 
    },
    order_id:{
        type:String,
        unique:false,
        default:null,
        required:false
    },
    receipt_no:{
        type:String,
        unique:false,
        default:null,
        required:false
    },
    payment_status:{
        type:String,
        unique:false,
        default:null,
        required:false
    }
})
module.exports = mongoose.model("orders",orders)