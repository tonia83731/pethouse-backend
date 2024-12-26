const express = require("express");
const router = express.Router();
const upload = require("../../middleware/multer");
const adminFurkidController = require("../../controller/admin/furkid-controller");
const adminSupplyController = require("../../controller/admin/supply-controller");
const adminVolunteerController = require("../../controller/admin/volunteer-controller");
const adminPartnerController = require("../../controller/admin/partner-controller");
const adminAdoptionController = require("../../controller/admin/adoption-controller");

router.get("/furkids/:furkidId", adminFurkidController.getFurkid);
router.put(
  "/furkids/:furkidId",
  upload.single("file"),
  adminFurkidController.updateFurkid
);
router.delete("/furkids/:furkidId", adminFurkidController.deleteFurkid);
router.get("/supplies/:supplyId", adminSupplyController.getSupply);
router.put("/supplies/:supplyId", adminSupplyController.updateSupply);
router.delete("/supplies/:supplyId", adminSupplyController.deleteSupply);
router.get("/volunteers/:volunteerId", adminVolunteerController.getVolunteer);
router.put(
  "/volunteers/:volunteerId",
  adminVolunteerController.updateVolunteer
);
router.delete(
  "/volunteers/:volunteerId",
  adminVolunteerController.deleteVolunteer
);
router.get("/partners/:userId", adminPartnerController.getPartner);
router.put("/partners/:partnerId", adminPartnerController.updatePartner);
router.delete("/partners/:partnerId", adminPartnerController.deletePartner);
router.patch(
  "/adoptions/:adoptionId/status",
  adminAdoptionController.updateAdoptionStatus
);

router.get("/furkids", adminFurkidController.getFurkids);
router.post(
  "/furkids",
  upload.single("file"),
  adminFurkidController.createFurkid
);
router.get("/supplies", adminSupplyController.getSupplies);
router.post("/supplies", adminSupplyController.createSupply);
router.get("/volunteers", adminVolunteerController.getVolunteers);
router.post("/volunteers", adminVolunteerController.createVolunteer);
router.get("/partners", adminPartnerController.getPartners);

// V
router.get("/user-info", adminPartnerController.getUser);
router.post("/partners", adminPartnerController.createPartner);
// router.get("/adoptions", adminAdoptionController.getAdoptions);
module.exports = router;
