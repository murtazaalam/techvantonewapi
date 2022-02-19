const OrderService = require('../services/order.service');
const { generateOrder, verifyOrder } = require('../helper/razorpay');

class OrderController{
    static async addToOrder(req, res){
        try{
            var options = {
                amount: parseFloat(req.body.total_amount)*100,  // amount in the smallest currency unit
                currency: "INR",
                receipt: new Date().getTime()
            };
            let response = await generateOrder(options);
            let orderData = {
                user_id:req.user.email,
                order_id:response.id,
                total_amount:response.amount,
                receipt_no: response.receipt,
                payment_status:"pending",
                cart_item:req.body.cart_item
            }
            let newOrder = OrderService.addOrder(orderData);
            return res.status(201).json({message:"Order Added",order:newOrder,response});
        }catch(err){
            console.log(err);
            return res.status(500).json({message:"Invalid Request",err:err});
        }
    }
    static async verifyOrder(req, res){
        await verifyOrder(req.body.razorpay_payment_id,req.body.order_id,req.user.email); 
        return res.status(200).json({message:"Payment Success"});
    }
    static async myOrder(req, res){
        try{
            let data = await OrderService.baughtOrder({$and:[{user_id:req.user.email},{payment_status:"success"}]});
            let orderItem = [];
            data.forEach(item => {
                item.cart_item.forEach(cartItem => {
                    orderItem.push(cartItem); 
                })
            })
            res.send(orderItem);
        }
        catch(err){
            console.log(err);
        }        
    }
}
module.exports = OrderController;