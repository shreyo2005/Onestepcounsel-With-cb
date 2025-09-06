//basic express boilerplate code to handle login+registration
const express=require("express");
const router=express.router;
const user=require("../models/user");
const college=require("../models/college");

router.post("/login",async(req,res) =>{
    try{
        const{email,password,firstname,lastname,exam,rank}=req.body;

        let user=await user.findOne({ email });
        if(!user){
            user=new user({email,password,firstname,lastname,exam,rank});
            await user.save();
        }
//for finding colleges
        const colleges=await college.find({
            exam:exam,
            cuttoff:{$gte:rank}

        }).sort({nirfrank:1});
        res.json({success:true,user,colleges});
    } catch(err){
        console.error(err);
        res.status(500).json({success:false,message:"server error"});
    }
});
module.exports=router;
