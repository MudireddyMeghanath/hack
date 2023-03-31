const express = require("express");
const router = express.Router();
const {emailcheck}=require("../controllers/message")
router.route("/message").post(emailcheck);







module.exports = router;