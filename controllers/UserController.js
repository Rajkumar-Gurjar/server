const UserModel = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class UserController{

    static register = async (req,res) => {
        try {
            // console.log(req.body)
            const {name,email,password} = req.body
            const existingUser = await UserModel.findOne({ email })
            if (existingUser){
                return res.status(400).json({message: "Email already exists"})
            }
            // hash password
            const hashedPassword = await bcrypt.hash(password,10)
            const data = await UserModel.create({
                name,
                email,
                password:hashedPassword
            });
            res.json({
                data,
                msg:"user register success"
            })
        }catch (error) {
            console.log(error)
        }
    }

    static login = async (req,res) => {
        try{
            const {email,password} = req.body;

            const user = await UserModel.findOne({email});
            // console.log(user)
            if(!user) {
                return res.status(400).json({message: "Invalid credentials"});
            }

            const ismatch = await bcrypt.compare(password,user.password);
            // console.log(ismatch)
            if(!ismatch) {
                return res.status(400).json({message: "Invalid credentials"});
            }
            // token create
            const token = jwt.sign(
              { ID: user._id },
              process.env.JWT_SECRET,
              {expiresIn:"2d"}
            );
            // console.log(token)

            // Send token in HTTP-Only cookie
            res.cookie("token",token,{
                httpOnly:true,
                secure: true,
                sameSite: "None",
                maxAge: 2 * 24 * 60 * 60 * 1000,
            });
            res.status(200).json({
             message:"Login successful",
             role: user.role,
             name: user.name,
             email: user.email,
            });
        }catch (error) {
            console.log(error);
            res.status(500).json({ message: "Server Error", error})
        }
    }

    static profile = async(req,res) => {
        try{
            console.log("hello profile")
        }catch(error) {
            console.log(error)
        }
    }

    static logout = async(req,res) => {
        res.clearCookie("token", {
            httpOnly: true,
            secure: true,
            sameSite: "None",
        });
        return res.status(200).json({ message: "Logged out successfully "})
    }

}

module.exports = UserController;