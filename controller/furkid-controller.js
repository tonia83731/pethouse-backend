const { Furkid, User } = require("../models");

const furkidController = {
  getFurkids: async (req, res, next) => {
    try {
      const { page = "1", userId, animal } = req.query;
      const limit = 12;
      const offset = (parseInt(page, 10) - 1) * limit;

      const where = {
        ...(userId ? { userId } : {}),
        ...(animal ? { animal } : {}),
      };
      const response = await Furkid.findAndCountAll({
        nest: true,
        raw: true,
        include: [User],
        where,
        limit,
        offset,
      });

      let furkids = response.rows.map((furkid) => ({
        ...furkid,
        partner: {
          name: furkid.User.name,
          phone: furkid.User.phone,
          address: furkid.User.address,
        },
        User: undefined,
      }));

      const totalPages = Math.ceil(response.count / limit);

      return res.status(200).json({
        success: true,
        data: {
          furkids,
          pagination: {
            currentPage: parseInt(page, 10),
            totalPages,
            // totalItems: furkids.count,
            itemsPerPage: limit,
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
  getFurkid: async (req, res, next) => {
    try {
      const { furkidId } = req.params;
      const response = await Furkid.findByPk(furkidId, {
        nest: true,
        raw: true,
        include: [User],
      });

      let furkid = {
        ...response,
        partner: {
          name: response.User.name,
          phone: response.User.phone,
          address: response.User.address,
        },
        User: undefined,
      };

      return res.status(200).json({
        success: true,
        data: furkid,
      });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = furkidController;
