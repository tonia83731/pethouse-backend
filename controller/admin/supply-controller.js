const { FindSupply, User } = require("../../models");

const adminSupplyController = {
  getSupplies: async (req, res, next) => {
    try {
      const response = await FindSupply.findAll({
        nest: true,
        raw: true,
        include: [User],
      });
      let supplies = response.map((supply) => ({
        ...supply,
        partner: {
          id: supply.partnerId,
          name: supply.User.name,
        },
        User: undefined,
      }));

      return res.status(200).json({
        success: false,
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

      if (!response)
        return res.status(404).json({
          success: false,
          message: "Supply no found",
        });

      let supply = {
        ...response,
        partner: {
          id: response.User.id,
          name: response.User.name,
        },
        User: undefined,
      };
      return res.status(200).json({
        success: false,
        data: supply,
      });
    } catch (error) {
      console.log(error);
    }
  },
  createSupply: async (req, res, next) => {
    try {
      const { userId, supplyName, number, introduction } = req.body;

      if (!userId)
        return res.status(401).json({
          success: false,
          message: "UserId cannot be blank",
        });

      if (!supplyName)
        return res.status(401).json({
          success: false,
          message: "SupplyName cannot be blank",
        });
      if (number <= 0)
        return res.status(401).json({
          success: false,
          message: "Number should >= 1",
        });

      const new_supply = await FindSupply.create({
        userId,
        supplyName,
        number,
        introduction,
      });

      return res.status(200).json({
        success: false,
        data: new_supply,
      });
    } catch (error) {
      console.log(error);
    }
  },
  updateSupply: async (req, res, next) => {
    try {
      const { supplyId } = req.params;
      const { userId, supplyName, number, introduction } = req.body;

      const supply = await FindSupply.findByPk(supplyId);
      if (!supply)
        return res.status(404).json({
          success: false,
          message: "Supply no found",
        });

      const update_supply = await supply.update({
        userId: userId || supply.userId,
        supplyName: supplyName || supply.supplyName,
        number: number || supply.number,
        introduction: introduction || supply.introduction,
      });

      return res.status(200).json({
        success: true,
        message: "Supply updated",
        data: update_supply,
      });
    } catch (error) {
      console.log(error);
    }
  },
  deleteSupply: async (req, res, next) => {
    try {
      const { supplyId } = req.params;
      const supply = await FindSupply.findByPk(supplyId);
      if (!supply)
        return res.status(404).json({
          success: false,
          message: "Supply no found",
        });

      await supply.destroy();
      return res.status(200).json({
        success: true,
        message: "Supply deleted",
      });
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = adminSupplyController;
