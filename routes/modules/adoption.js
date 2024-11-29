const express = require("express");
const router = express.Router();

const adoptionController = require("../../controller/adoption-controller");

router.post("/", adoptionController.applyAdoption);

module.exports = router;
