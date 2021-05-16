const express = require('express')
const loginRouter = express.Router()
const mongoose = require('../index')
const user= require('../models/userModel')
loginRouter.route('/')
.post((req,res)=>{
  var email=req.body.email
  var password=req.body.password
  user.findOne({email:email})
  .then((data)=>{
      if(data.password===password)
      {
          res.statusCode=200;
          res.send('you are authorised user');
      }
      else{
        res.statusCode=401;
        res.send('unauthorised user');
      }
      
   })
  .catch((err)=>{console.log(err)})
  
})

module.exports=loginRouter