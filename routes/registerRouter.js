const express = require('express')
const registerRouter = express.Router()
const mongoose = require('../index')
const user= require('../models/userModel')
registerRouter.route('/')
.get((req,res)=>{res.send('get is not allowed on register endpoint')})
.post((req,res)=>{
  const user1= new user({email:req.body.email,password:req.body.password})
  user1.save()
  .then((data)=>{res.send('registration successful')})
  .catch((err)=>{console.log(err)})
  
})
.put((req,res)=>{res.send('put is not allowed on register endpoint')})
.delete((req,res)=>{res.send('delete is not allowed on register endpoint')})


module.exports=registerRouter