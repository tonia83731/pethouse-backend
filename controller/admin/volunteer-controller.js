const { Volunteer, FindVolunteer, Partner } = require("../../models");

const adminVolunteerController = {
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

      if (!volunteer)
        return res.status(404).json({
          success: false,
          message: "Volunteer no found",
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
  getVolunteerApplication: async (req, res, next) => {
    try {
      const { findVolunteerId } = req.params;
      const applications = await Volunteer.findAll({
        raw: true,
        where: { findVolunteerId },
      });

      return res.status(200).json({
        success: false,
        data: applications,
      });
    } catch (error) {
      console.log(error);
    }
  },
  createVolunteer: async (req, res, next) => {
    try {
      const {
        partnerId,
        perPerson,
        weekday,
        startTime,
        endTime,
        minHour,
        introduction,
      } = req.body;

      if (!partnerId)
        return res.status(401).json({
          success: false,
          message: "PartnerId cannot be blank",
        });

      if (perPerson < 1)
        return res.status(401).json({
          success: false,
          message: "PerPerson should be more than 1",
        });

      let start_time = new Date(startTime);
      let end_time = new Date(endTime);

      if (end_time > start_time) {
        return res.status(401).json({
          success: false,
          messgae: "End time cannot be former than start time",
        });
      }

      if (minHour < 1)
        return res.status(401).json({
          success: false,
          message: "minHour should be more than 1",
        });

      const create_volunteer = await FindVolunteer.create({
        partnerId,
        perPerson,
        weekday: weekday ? weekday : null,
        startTime,
        endTime,
        minHour,
        introduction,
      });

      return res.status(201).json({
        success: true,
        data: create_volunteer,
      });
    } catch (error) {
      console.log(error);
    }
  },
  updateVolunteer: async (req, res, next) => {
    try {
      const { volunteerId } = req.params;
      const {
        partnerId,
        perPerson,
        weekday,
        startTime,
        endTime,
        minHour,
        introduction,
      } = req.body;
      const volunteer = await FindVolunteer.findByPk(volunteerId);
      if (!volunteer)
        return res.status(404).json({
          success: false,
          message: "Volunteer no found",
        });

      const update_volunteer = await volunteer.update({
        partnerId: partnerId || volunteer.partnerId,
        perPerson: perPerson || volunteer.perPerson,
        weekday: weekday || volunteer.weekday,
        startTime: startTime || volunteer.startTime,
        endTime: endTime || volunteer.endTime,
        minHour: minHour || volunteer.minHour,
        introduction: introduction || volunteer.introduction,
      });

      return res.status(200).json({
        success: true,
        message: "Volunteer update successfully",
        data: update_volunteer,
      });
    } catch (error) {
      console.log(error);
    }
  },
  deleteVolunteer: async (req, res, next) => {
    try {
      const { volunteerId } = req.params;
      const volunteer = await FindVolunteer.findByPk(volunteerId);
      if (!volunteer)
        return res.status(404).json({
          success: false,
          message: "Volunteer no found",
        });
      await volunteer.destroy();
      return res.status(200).json({
        success: true,
        message: "Volunteer delete successfully",
      });
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = adminVolunteerController;
