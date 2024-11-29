const { FindSupply, Partner } = require("../models");

const supplyController = {
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
};
module.exports = supplyController;
