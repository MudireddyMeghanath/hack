const express = require("express");
const router = express.Router();

const {emailcheck}=require("../controllers/email")
router.route("/email").post(emailcheck);





module.exports = router;