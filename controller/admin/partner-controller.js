const { Partner } = require("../../models");
const { weekday_datas } = require("../../datas/weekday-datas");
const validator = require("validator");

const adminPartnerController = {
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
  getPartner: async (req, res, next) => {
    try {
      const { partnerId } = req.params;
      const partner = await Partner.findByPk(partnerId, {
        raw: true,
      });

      if (!partner)
        return res.status(404).json({
          success: false,
          message: "Partner no found",
        });

      return res.status(200).json({
        success: false,
        data: partner,
      });
    } catch (error) {
      console.log(error);
    }
  },
  createPartner: async (req, res, next) => {
    try {
      const {
        name,
        email,
        weekStart,
        weekEnd,
        openingTime,
        closingTime,
        city,
        address,
      } = req.body;

      if (
        !name ||
        !email ||
        !weekStart ||
        !weekEnd ||
        !openingTime ||
        !closingTime ||
        !city ||
        !address
      )
        return res.status(401).json({
          success: false,
          message: "Input cannot be blank",
        });

      if (!validator.isEmail(email))
        return res.status(401).json({
          success: false,
          message: "Email invalid",
        });

      const week_start_value = weekday_datas.find(
        (week) => week.label === weekStart
      ).value;
      const week_end_value = weekday_datas.find(
        (week) => week.label === weekEnd
      ).value;

      if (week_start_value > week_end_value)
        return res.status(401).json({
          success: false,
          message: "WeekStart cannot be former than WeekEnd",
        });

      let opening = new Date(openingTime);
      let closing = new Date(closingTime);
      if (opening > closing) {
        return res.status(401).json({
          success: false,
          message: "OpeningTime cannot be former than closingTime",
        });
      }

      const new_partner = await Partner.create({
        name,
        email,
        weekStart,
        weekEnd,
        openingTime,
        closingTime,
        city,
        address,
      });
      return res.status(201).json({
        success: false,
        data: new_partner,
      });
    } catch (error) {
      console.log(error);
    }
  },
  updatePartner: async (req, res, next) => {
    try {
      const { partnerId } = req.params;
      const {
        name,
        email,
        weekStart,
        weekEnd,
        openingTime,
        closingTime,
        city,
        address,
      } = req.body;
      const partner = await Partner.findByPk(partnerId);
      if (!partner)
        return res.status(404).json({
          success: false,
          message: "Partner no found",
        });

      const partner_data = partner.toJSON();
      const update_partner = await partner.update({
        name: name || partner_data.name,
        email: email || partner_data.email,
        weekStart: weekStart || partner_data.weekStart,
        weekEnd: weekEnd || partner_data.weekEnd,
        openingTime: openingTime || partner_data.openingTime,
        closingTime: closingTime || partner_data.closingTime,
        city: city || partner_data.city,
        address: address || partner_data.address,
      });

      return res.status(200).json({
        success: true,
        message: "Partner updated successfully",
        data: update_partner,
      });
    } catch (error) {
      console.log(error);
    }
  },
  deletePartner: async (req, res, next) => {
    try {
      const { partnerId } = req.params;
      const partner = await Partner.findByPk(partnerId);

      if (!partner)
        return res.status(404).json({
          success: false,
          message: "Partner no found",
        });

      await partner.destroy();
      return res.status(200).json({
        success: false,
        message: "Partner delete successfully",
      });
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = adminPartnerController;
