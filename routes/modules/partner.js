const express = require("express");
const router = express.Router();
const partnerController = require("../../controller/partner-controller");

router.get("/", partnerController.getPartners);

module.exports = router;
