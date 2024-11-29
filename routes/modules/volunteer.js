const express = require("express");
const router = express.Router();
const volunteerController = require("../../controller/volunteer-controller");

router.get("/:volunteerId", volunteerController.getVolunteer);
router.post("/:findVolunteerId", volunteerController.applyVolunteer);
router.get("/", volunteerController.getVolunteers);

module.exports = router;
