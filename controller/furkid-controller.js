const { Furkid, Partner } = require("../models");

const furkidController = {
  getFurkids: async (req, res, next) => {
    try {
      const furkids = await Furkid.findAll({
        nest: true,
        raw: true,
        include: [Partner],
      });

      let furkid_datas = furkids.map((furkid) => ({
        ...furkid,
        partnerName: furkid.Partner.name,
        partnerPhone: furkid.Partner.phone,
        partnerAddress: furkid.Partner.city + furkid.Partner.address,
        Partner: undefined,
      }));

      return res.status(200).json({
        success: false,
        data: furkid_datas,
      });
    } catch (error) {
      console.log(error);
    }
  },
  getFurkid: async (req, res, next) => {
    try {
      const { furkidId } = req.params;
      const furkid = await Furkid.findByPk(furkidId, {
        nest: true,
        raw: true,
        include: [Partner],
      });

      let furkid_data = {
        ...furkid,
        partnerName: furkid.Partner.name,
        partnerPhone: furkid.Partner.phone,
        partnerAddress: furkid.Partner.city + furkid.Partner.address,
        Partner: undefined,
      };

      return res.status(200).json({
        success: false,
        data: furkid_data,
      });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = furkidController;
