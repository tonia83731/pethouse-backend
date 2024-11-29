const { Adoption, Furkid } = require("../../models");

const adminAdoptionController = {
  getAdoptions: async (req, res, next) => {
    try {
      const { furkidId } = req.params;

      const adoptions = await Adoption.findAll({
        nest: true,
        where: { furkidId },
        include: [Furkid],
      });

      const adoption_datas = adoptions.map((adoption) => adoption.toJSON());

      return res.status(200).json({
        success: true,
        data: adoption_datas,
      });
    } catch (error) {
      console.log(error);
    }
  },
  getAdoption: async (req, res, next) => {
    try {
      const { adoptionId } = req.params;
      const adoption = await Adoption.findByPk(adoptionId, {
        raw: true,
        nest: true,
        include: [Furkid],
      });

      if (!adoption)
        return res.status(404).json({
          success: false,
          message: "Adoption no found",
        });

      return res.status(200).json({
        success: true,
        data: adoption,
      });
    } catch (error) {
      console.log(error);
    }
  },
  updateAdoptionStatus: async (req, res, next) => {
    try {
      const { adoptionId } = req.params;
      const { status } = req.body;
      const adoption = await Adoption.findByPk(adoptionId, {
        raw: true,
        nest: true,
        include: [Furkid],
      });

      if (!adoption)
        return res.status(404).json({
          success: false,
          message: "Adoption no found",
        });

      const update_adoption = await adoption.update({
        status,
      });

      return res.status(200).json({
        success: true,
        message: "Adoption status update successfully",
        data: update_adoption,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = adminAdoptionController;
