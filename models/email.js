const mongoose = require("mongoose");
const email=new mongoose.Schema({
    mail: {type: String, 
    required: true},
    message:[{type: String}]


})
module.exports = mongoose.model("Email", email);