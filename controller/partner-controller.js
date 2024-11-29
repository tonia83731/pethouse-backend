const { Partner } = require("../models");

const partnerController = {
  getPartners: async (req, res, next) => {
    try {
      const partners = await Partner.findAll({
        raw: true,
      });

      return res.status(200).json({
        success: false,
        data: partners,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = partnerController;
