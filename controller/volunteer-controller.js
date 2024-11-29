const { Volunteer, FindVolunteer, Partner } = require("../models");

const volunteerController = {
  getVolunteers: async (req, res, next) => {
    try {
      const volunteers = await FindVolunteer.findAll({
        nest: true,
        raw: true,
        include: [Partner],
      });

      let volunteer_datas = volunteers.map((volunteer) => ({
        ...volunteer,
        partnerName: volunteer.Partner.name,
        partnerPhone: volunteer.Partner.phone,
        partnerAddress: volunteer.Partner.city + volunteer.Partner.address,
        Partner: undefined,
      }));

      return res.status(200).json({
        success: false,
        data: volunteer_datas,
      });
    } catch (error) {
      console.log(error);
    }
  },
  getVolunteer: async (req, res, next) => {
    try {
      const { volunteerId } = req.params;
      const volunteer = await FindVolunteer.findByPk(volunteerId, {
        nest: true,
        raw: true,
        include: [Partner],
      });

      let volunteer_data = {
        ...volunteer,
        partnerName: volunteer.Partner.name,
        partnerPhone: volunteer.Partner.phone,
        partnerAddress: volunteer.Partner.city + volunteer.Partner.address,
        Partner: undefined,
      };

      return res.status(200).json({
        success: false,
        data: volunteer_data,
      });
    } catch (error) {
      console.log(error);
    }
  },
  applyVolunteer: async (req, res, next) => {
    try {
      const { findVolunteerId } = req.params;
      const { name, phone, email, date, hours, needProven } = req.body;

      const findVolunteer = await FindVolunteer.findByPk(findVolunteerId);
      if (!findVolunteer)
        return res.status(404).json({
          success: false,
          message: "Find volunteer no found.",
        });

      const created_volunteer = await Volunteer.create({
        findVolunteerId,
        name,
        phone,
        email,
        date,
        hours,
        needProven,
      });

      return res.status(201).json({
        success: true,
        message: "Volunteer created",
        data: created_volunteer,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = volunteerController;
