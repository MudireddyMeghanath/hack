const express=require('express');
const dotenv=require('dotenv');
dotenv.config({path:"./config/config.env"})
const connectDatabase=require("./config/database")
const app=express();
connectDatabase();
const Number = require("./routes/number");
const email = require("./routes/email");
const message = require("./routes/message");

app.use("/api/v1",Number);
app.use("/api/v1",email );
app.use("api/v1",message);

port=4000
app.listen(port,()=>{
    console.log("server is hot");

});

