const Message = require("../models/message");
exports.emailcheck=async(req,res,next)=>{
    const Number = req.body.number;
   const message=req.body.message;
    const Fake=Message.create({
        Number,
        message

    })
    res.status(201).json({
        success: true,
        Fake,
      });

}