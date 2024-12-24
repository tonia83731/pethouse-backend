const { FindSupply, User } = require("../models");

const supplyController = {
  getSupplies: async (req, res, next) => {
    try {
      const { userId } = req.query;
      const response = await FindSupply.findAll({
        nest: true,
        raw: true,
        include: [User],
        where: {
          ...(userId ? { userId } : {}),
        },
      });
      let supplies = response.map((supply) => ({
        ...supply,
        partner: {
          name: supply.User.name,
          phone: supply.User.phone,
          address: supply.User.address,
        },
        User: undefined,
      }));

      return res.status(200).json({
        success: true,
        data: supplies,
      });
    } catch (error) {
      console.log(error);
    }
  },
  getSupply: async (req, res, next) => {
    try {
      const { supplyId } = req.params;

      const response = await FindSupply.findByPk(supplyId, {
        nest: true,
        raw: true,
        include: [User],
      });

      let supply = {
        ...response,
        partner: {
          name: response.User.name,
          phone: response.User.phone,
          email: response.User.email,
          address: response.User.address,
        },
        User: undefined,
      };
      return res.status(200).json({
        success: true,
        data: supply,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = supplyController;
