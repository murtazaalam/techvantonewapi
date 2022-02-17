const user = require('../models/user');
class UserService {
    static async getUserByFilter(filter){
        try{
            return await user.findOne(filter)
        }
        catch(er){
            throw new Error(er)
        }
    }
    static async updateToken(data){
        return await user.updateOne(
            {id:data._id},
            {
                $set:{
                    "token":data.token
                }
            }
        )
    }
    static async getUserByToken(token){
        try{
            return await user.findOne(token)
        }catch(err){
            throw new Error(err);
        }
    }
    static async newUser(body){
        let newUser = new user(body)
        return await newUser.save()
    }
}
module.exports = UserService;