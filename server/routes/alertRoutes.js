const express = require("express");
const router = express.Router();
const { sendSOS } = require("../controllers/alertController");

router.post("/sos", sendSOS);

module.exports = router;