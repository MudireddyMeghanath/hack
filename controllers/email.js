const Email = require("../models/email");
exports.emailcheck=async(req,res,next)=>{
    const email = req.body.email;
   const message=req.body.message;
   const Fake= Email.create({
        email,
        message

    })
    res.status(201).json({
        success: true,
        Fake,
      });

}