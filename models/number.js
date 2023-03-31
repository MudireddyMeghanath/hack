const mongoose = require("mongoose");
const number= new mongoose.Schema({
    number:{type:Number,
    required:true}

})
module.exports = mongoose.model("Number", number);