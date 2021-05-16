const mongoose = require('../index')
const userSchema = new mongoose.Schema({
    email:String,
    password: String
})

module.exports = new mongoose.model('user',userSchema)

