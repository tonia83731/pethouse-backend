const { User } = require("../models");

const partnerController = {
  getPartners: async (req, res, next) => {
    try {
      const response = await User.findAll({
        raw: true,
        where: {
          is_admin: false,
        },
      });

      const partners = response.map(
        ({
          id,
          name,
          email,
          phone,
          weekStart,
          weekEnd,
          openingTime,
          closingTime,
          address,
        }) => ({
          id,
          name,
          email,
          phone,
          weekStart,
          weekEnd,
          openingTime,
          closingTime,
          address,
        })
      );

      return res.status(200).json({
        success: true,
        data: partners,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = partnerController;
