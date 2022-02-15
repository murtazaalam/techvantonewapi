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
    static async newUser(body){
        let newUser = new user(body)
        return await newUser.save()
    }
}
module.exports = UserService;