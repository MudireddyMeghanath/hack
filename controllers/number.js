const Number = require("../models/number");
exports.emailcheck=async(req,res,next)=>{
    const number = req.body.number;
   
    const Fake=Number.create({
        number

    })
    res.status(201).json({
        success: true,
        Fake,
      });

}