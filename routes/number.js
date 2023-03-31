const express = require("express");
const router = express.Router();
const {emailcheck}=require("../controllers/number")
router.route("/number").post(emailcheck);







module.exports = router;