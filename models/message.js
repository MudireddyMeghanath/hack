
const mongoose = require("mongoose");
const message=new mongoose.Schema({
    number: {type: Number, 
    required: true},
    message:[{type: String}]


})
module.exports = mongoose.model("Message", message);