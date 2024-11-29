const { Furkid, Partner } = require("../../models");
const {
  animalType,
  animalGender,
  animalSize,
  animalAge,
} = require("../../datas/animal-datas");

const adminFurkidController = {
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
  createFurkid: async (req, res, next) => {
    try {
      const {
        name,
        gender,
        animal,
        size,
        age,
        partnerId,
        isNeutured,
        isVaccinated,
      } = req.body;

      if (!name)
        return res.status(401).json({
          success: false,
          message: "Name cannot be blank.",
        });

      if (!animalGender.includes(gender))
        return res.status(401).json({
          success: false,
          message: "Invalid gender value",
        });
      if (!animalType.includes(animal))
        return res.status(401).json({
          success: false,
          message: "Invalid animal type value",
        });
      if (!animalSize.includes(size))
        return res.status(401).json({
          success: false,
          message: "Invalid size value",
        });
      if (!animalAge.includes(age))
        return res.status(401).json({
          success: false,
          message: "Invalid age value",
        });
      if (!partnerId)
        return res.status(400).json({
          success: false,
          message: "PartnerId cannot be blank",
        });

      const new_furkid = await Furkid.create({
        name,
        gender: gender ? gender : null,
        animal,
        size,
        age,
        partnerId,
        isNeutured: isNeutured ? isNeutured : false,
        isVaccinated: isVaccinated ? isVaccinated : false,
      });

      return res.status(201).json({
        success: true,
        data: new_furkid,
      });
    } catch (error) {
      console.log(error);
    }
  },
  updateFurkid: async (req, res, next) => {},
  deleteFurkid: async (req, res, next) => {},
};

module.exports = adminFurkidController;
