const CartService = require('../services/cart.service');

class CartController {
    static async addToCart(req, res){
        let data = await CartService.getItemByEmailAndCourseId({email:req.user.email,course_id:req.body.course_id});
        if(data.length > 0) return res.status(400).json({message:"Item Already Added"});
        let itemData = {
            course_name:req.body.course_name,
            course_image:req.body.thumbnail,
            description:req.body.description,
            avg_rating:req.body.avg_rating,
            gradient:req.body.gradient,
            reviews:req.body.reviews,
            discount:req.body.discount,
            course_id:req.body.course_id,
            price:req.body.price,
            email:req.user.email
        }
        let newItem = await CartService.addItem(itemData);
        return res.status(201).json({message:"Item Added",item:newItem});
    }
    static async getFromCartByEmail(req, res){
        let data = await CartService.getItemsByEmail({email:req.user.email})
        res.send(data);
    }
    static async removeFromCart(req, res){
        let data = await CartService.removeById({_id:req.params.id});
        res.send(data);
    }
}
module.exports = CartController;