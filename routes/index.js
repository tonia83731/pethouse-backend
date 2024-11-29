const express = require("express");
const router = express.Router();
const { authenticated } = require("../middleware/api-auth");
const { errorHandler } = require("../middleware/error-handler");
const admin = require("./modules/admin");
const auth = require("./modules/auth");
const partner = require("./modules/partner");
const furkid = require("./modules/furkid");
const supply = require("./modules/supplies");
const adoption = require("./modules/adoption");
const volunteer = require("./modules/volunteer");

router.use("/partners", partner);
router.use("/furkids", furkid);
router.use("/supplies", supply);
router.use("/adoptions", adoption);
router.use("/volunteers", volunteer);
router.use("/auth", auth);
router.use("/admin", authenticated, admin);
router.use("/", errorHandler);

module.exports = router;
