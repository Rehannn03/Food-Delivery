require('dotenv').config()
const express = require("express");
const router = express.Router();
const User = require("../model/User");
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const { body, validationResult } = require("express-validator");

router.post(
    "/loginuser",
    [body("email").isEmail(), body("password","Password must be min 5 characters").isLength({ min: 5 })]
    ,async (req, res) => {
      
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
      }
      let email=req.body.email
      try {
        let data=await User.findOne({email})
        if(!data){
          return res.status(400).json({ errors: {error:'Enter Valid Data'} });
        }
        
        let decrypt=bcrypt.compare(req.body.password,data.password)
  
        if(!decrypt){
          return res.status(400).json({ errors: {error:'Invalid Password'} });
        }
  
        const userdata={
          user:{
            id:data.id
          }
        }
  
        const token=jwt.sign(userdata,process.env.SECRET)
        return res.json({success:true,token:token})
      } catch (error) {
        console.log(error);
        res.json({ success: false });
      }
    }
  );

  module.exports=router