const express = require("express");
const router = express.Router();
const supplyController = require("../../controller/supply-controller");

router.get("/:supplyId", supplyController.getSupply);
router.get("/", supplyController.getSupplies);

module.exports = router;
