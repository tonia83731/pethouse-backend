const { Volunteer, FindVolunteer, User } = require("../../models");

const adminVolunteerController = {
  getVolunteers: async (req, res, next) => {
    try {
      const volunteers = await FindVolunteer.findAll({
        nest: true,
        raw: true,
        include: [User],
        order: [
          ["perPerson", "ASC"],
          ["date", "DESC"],
        ],
      });

      let volunteer_datas = volunteers.map((volunteer) => ({
        ...volunteer,
        partner: {
          id: volunteer.userId,
          name: volunteer.User.name,
          // phone: volunteer.User.phone,
          // address: volunteer.User.address,
        },
        User: undefined,
        userId: undefined,
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
      const response = await FindVolunteer.findByPk(volunteerId, {
        nest: true,
        include: [User, Volunteer],
      });

      if (!response)
        return res.status(404).json({
          success: false,
          message: "Volunteer no found",
        });

      let responseJSON = response.toJSON();
      let volunteer = {
        ...responseJSON,
        partner: {
          id: responseJSON.userId,
          name: responseJSON.User.name,
          phone: responseJSON.User.phone,
          address: responseJSON.User.address,
        },
        User: undefined,
        userId: undefined,
      };

      return res.status(200).json({
        success: false,
        data: volunteer,
      });
    } catch (error) {
      console.log(error);
    }
  },
  // getVolunteerApplication: async (req, res, next) => {
  //   try {
  //     const { findVolunteerId } = req.params;
  //     const applications = await Volunteer.findAll({
  //       raw: true,
  //       where: { findVolunteerId },
  //     });

  //     return res.status(200).json({
  //       success: false,
  //       data: applications,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
  createVolunteer: async (req, res, next) => {
    try {
      const {
        userId,
        perPerson,
        date,
        startTime,
        endTime,
        minHour,
        introduction,
      } = req.body;

      if (!userId)
        return res.status(401).json({
          success: false,
          message: "UserId cannot be blank",
        });

      if (perPerson < 1)
        return res.status(401).json({
          success: false,
          message: "PerPerson should be more than 1",
        });

      if (startTime > endTime) {
        return res.status(401).json({
          success: false,
          message: "Invalid time: startTime cannot exceed endTime",
        });
      }

      if (minHour < 1)
        return res.status(401).json({
          success: false,
          message: "minHour should be more than 1",
        });

      const create_volunteer = await FindVolunteer.create({
        userId,
        perPerson,
        date,
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
        userId,
        perPerson,
        date,
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
        userId: userId || volunteer.userId,
        perPerson: perPerson || volunteer.perPerson,
        date,
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
