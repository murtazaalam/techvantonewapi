const UserService = require("../services/use.service");
const { jwtGenerator, jwtSignGenerator } = require("../utils/jwt");
const bcrypt = require('bcryptjs');

class AuthController {
    static async login(req, res) {
        let data = await UserService.getUserByFilter({email:req.body.email});
        if(!data) return res.status(404).json({message:"User Not Found"});
        const passIsValid = bcrypt.compareSync(req.body.password, data.password);
        if(!passIsValid) return res.status(400).json({message:"Incorrect Password"});
        let token = jwtGenerator({_id: data._id});
        await UserService.updateToken({_id:data._id,token});
        res.status(200).json({message:"Login Success", token});
    }
    static async register(req, res){
        let hashPassword = bcrypt.hashSync(req.body.password, 8);
        let data = await UserService.getUserByFilter({email:req.body.email});
        if(data) return res.status(400).json({message:"Email Already Taken"});
        let token = jwtSignGenerator(req.body.email);
        console.log(data);
        let current = new Date();
        let registerDetails = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: hashPassword,
            token: token,
            createdBy: current,
            status: "0"
        }
        let user = await UserService.newUser(registerDetails)
        return res.status(201).json({message:"Registration Success",user:user})
    }
}
module.exports = AuthController;