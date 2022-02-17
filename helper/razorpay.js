const Razorpay = require('razorpay');
const CartService = require('../services/cart.service');
const OrderService = require('../services/order.service');

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
});
exports.generateOrder = async (option) => {
    try{
        let x = await razorpay.orders.create(option);
        return x;
    }
    catch(err){
        throw new Error(err);
    }
}
exports.verifyOrder = async (paymentId, orderId, email) => {
    try{
        razorpay.payments.fetch(paymentId).then((response) => {
            //if(response.status === "captured") console.log("Payment Successful");
            if(response.status === "captured"){
                OrderService.updateOrder(orderId);
                CartService.removeByEmail({email:email});
            }

        }).catch((err) =>{
            console.log(err);
        })
    }
    catch(err){
        throw new Error(err);
    }
}