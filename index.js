//jshint esversion:6
const express= require('express')
const bodyparser= require('body-parser')
const app = express()
const mongoose=require('mongoose')
app.listen(3000,()=>{'Listening,sai'})
app.use(bodyparser())
mongoose.connect('mongodb://localhost:27017/new',{ useNewUrlParser: true, useUnifiedTopology: true })
.catch((err)=>{console.log(err)})
module.exports=mongoose
const loginRouter=require('./routes/loginRouter')
const registerRouter=require('./routes/registerRouter')
const submitRouter = require('./routes/submitRouter')
const homeRouter=require('./routes/homeRouter')

app.use('/',homeRouter)
app.use('/login',loginRouter)
app.use('/register',registerRouter)
app.use('/submit',submitRouter)

app.use((req,res)=>{
res.statusCode=404;
res.send('file not found')
})




