const express = require("express");
const router = express.Router();
const partner = require("./modules/partner");
const furkid = require("./modules/furkid");
const supply = require("./modules/supplies");
const volunteer = require("./modules/volunteer");

router.use("/partners", partner);
router.use("/furkids", furkid);
router.use("/supplies", supply);
router.use("/volunteers", volunteer);

module.exports = router;
