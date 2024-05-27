import { query } from "express";
import UserModel from "../../model/auth/index.js";
import { Op } from "sequelize";
import { compare,hash } from "bcrypt";
import jwt from "jsonwebtoken"

const authController={
signup:async(req,res)=>{
    try {
        const payload=req.body;
        const check=await UserModel.findOne({
            where:{
                email:payload.email,
            },
        })
        if(check){
            return res.status(400).json({
                message: "User already exists",
              });
        }
        const password=await hash(payload.password,10)
        const user=await UserModel.create({
            firstName:payload.firstName,
            lastName:payload.lastName,
            email:payload.email,
            password:password,
        })
    } catch (error) {
        console.log(error);
      res.status(500).json({
        message: "Internal server error",
        err,
    });
    }
},

signin:async(req,res)=>{
try {

const payload=req.body;
const check=await UserModel.findOne({
    where :{
        email: payload.email,
    },
})
if(!check){
    return res.status(401).json({
        message:"invalid1"
    })
}
const comparePassword=await compare(
    payload.password,
    check.password
);
if(!comparePassword){
   return res.status(401).json({message:"invalid2"}) 
}
const data ={
    id:check.id,
    email:check.email,
    firstName:check.firstName,
};
const token = jwt.sign(data,process.env.JWT_SECRET_KEY,{
    expiresIn:"1m"
})
res.status(202).json({data, token})
    
} catch (err) {
    console.log(err);
      res.status(500).json({
        message: "Internal server error",
      });
}
}


}

export default authController;