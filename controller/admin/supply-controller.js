const { FindSupply, Partner } = require("../../models");

const adminSupplyController = {
  getSupplies: async (req, res, next) => {
    try {
      const supplies = await FindSupply.findAll({
        nest: true,
        raw: true,
        include: [Partner],
      });
      let supply_datas = supplies.map((supply) => ({
        ...supply,
        partnerName: supply.Partner.name,
        partnerPhone: supply.Partner.phone,
        partnerAddress: supply.Partner.city + supply.Partner.address,
        Partner: undefined,
      }));

      return res.status(200).json({
        success: false,
        data: supply_datas,
      });
    } catch (error) {
      console.log(error);
    }
  },
  getSupply: async (req, res, next) => {
    try {
      const { supplyId } = req.params;

      const supply = await FindSupply.findByPk(supplyId, {
        nest: true,
        raw: true,
        include: [Partner],
      });

      if (!supply)
        return res.status(404).json({
          success: false,
          message: "Supply no found",
        });

      let supply_data = {
        ...supply,
        partnerName: supply.Partner.name,
        partnerPhone: supply.Partner.phone,
        partnerAddress: supply.Partner.city + supply.Partner.address,
        Partner: undefined,
      };
      return res.status(200).json({
        success: false,
        data: supply_data,
      });
    } catch (error) {
      console.log(error);
    }
  },
  createSupply: async (req, res, next) => {
    try {
      const { partnerId, supplyName, number, introduction } = req.body;

      if (!partnerId)
        return res.status(401).json({
          success: false,
          message: "PartnerId cannot be blank",
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
        partnerId,
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
      const { partnerId, supplyName, number, introduction } = req.body;

      const supply = await FindSupply.findByPk(supplyId);
      if (!supply)
        return res.status(404).json({
          success: false,
          message: "Supply no found",
        });

      const update_supply = await supply.update({
        partnerId: partnerId || supply.partnerId,
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
      return res.status(200).json({
        success: true,
        message: "Supply deleted",
      });
      await supply.destroy();
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = adminSupplyController;
