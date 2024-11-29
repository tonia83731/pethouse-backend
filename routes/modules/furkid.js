const express = require("express");
const router = express.Router();

const furkidController = require("../../controller/furkid-controller");

router.get("/:furkidId", furkidController.getFurkid);
router.get("/", furkidController.getFurkids);

module.exports = router;
