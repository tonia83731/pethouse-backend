const { Volunteer, FindVolunteer, User } = require("../models");
const { Op } = require("sequelize");
const validator = require("validator");

const volunteerController = {
  getVolunteers: async (req, res, next) => {
    try {
      const { userId } = req.query;
      const response = await FindVolunteer.findAll({
        nest: true,
        raw: true,
        include: [User],
        where: {
          ...(userId ? { userId } : {}),
          perPerson: {
            [Op.gt]: 0,
          },
        },
      });

      let volunteers = response.map((volunteer) => ({
        ...volunteer,
        partner: {
          id: volunteer.partnerId,
          name: volunteer.User.name,
          phone: volunteer.User.phone,
          email: volunteer.User.email,
          address: volunteer.User.address,
        },
        time: {
          date: volunteer.date,
          startTime: volunteer.startTime,
          endTime: volunteer.endTime,
        },
        User: undefined,
        partnerId: undefined,
      }));

      return res.status(200).json({
        success: true,
        data: volunteers,
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
        raw: true,
        include: [User],
      });

      let volunteer = {
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
        data: volunteer,
      });
    } catch (error) {
      console.log(error);
    }
  },

  // edit here
  applyVolunteer: async (req, res, next) => {
    try {
      const { findVolunteerId } = req.params;
      const { name, phone, email, date, startTime, hours, needProven } =
        req.body;

      const findVolunteer = await FindVolunteer.findByPk(findVolunteerId);

      if (!findVolunteer)
        return res.status(404).json({
          success: false,
          message: "FindVolunteer no found.",
        });

      // checked name, phone, email
      if (!name || !phone || !email) {
        return res.status(400).json({
          success: false,
          message: "Name, phone, email is required.",
        });
      }
      if (!validator.isEmail(email)) {
        return res.status(400).json({
          success: false,
          message: "Invalid email.",
        });
      }

      // check working time
      const valid_start = findVolunteer.startTime;
      const valid_end = findVolunteer.endTime;

      if (startTime < valid_start || startTime > valid_end) {
        return res.status(400).json({
          success: false,
          message: "Invalid start time",
        });
      }

      if (startTime + hours * 60 > valid_end) {
        return res.status(400).json({
          success: false,
          message: "Invalid time: Time range exceed end time",
        });
      }

      const volunteer = await Volunteer.create({
        findVolunteerId,
        name,
        phone,
        email,
        date,
        startTime,
        hours,
        needProven,
      });

      // 報名成功 需求人數-1
      findVolunteer.perPerson -= 1;
      await findVolunteer.save();

      return res.status(201).json({
        success: true,
        data: volunteer,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = volunteerController;
