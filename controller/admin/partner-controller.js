const { User } = require("../../models");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const adminPartnerController = {
  getUser: async (req, res, next) => {
    try {
      const userId = req.user.id;
      const response = await User.findByPk(userId, {
        raw: true,
      });

      const user = {
        id: response.id,
        name: response.name,
        account: response.account,
        email: response.email,
        isAdmin: response.isAdmin,
      };

      return res.status(200).json({
        success: false,
        data: user,
      });
    } catch (error) {
      console.log(error);
    }
  },
  createPartner: async (req, res, next) => {
    try {
      const userId = req.user.id;
      const user = await User.findByPk(userId);
      // 只有 ADMIN 可以新增使用者
      if (!user.is_admin) {
        return res.status(401).json({
          success: false,
          message: "Permission denied!",
        });
      }
      const {
        name,
        account,
        email,
        phone,
        address,
        password,
        weekStart,
        weekEnd,
        openingTime,
        closingTime,
      } = req.body;

      if (!name || !email || !account || !password) {
        return res.status(400).json({
          success: false,
          message: "Name, account, email and password is required",
        });
      }

      if (!validator.isEmail(email)) {
        return res.status(400).json({
          success: false,
          message: "Invalid email.",
        });
      }

      if (weekStart > weekEnd) {
        return res.status(400).json({
          success: false,
          message: "Invalid time: weekStart cannot exceed weekEnd",
        });
      }
      if (openingTime >= closingTime) {
        return res.status(400).json({
          success: false,
          message: "Invalid time: openingTime cannot exceed closingTime",
        });
      }

      const hash = await bcrypt(password, 10);

      const new_user = await User.create({
        name,
        account,
        email,
        phone,
        address,
        password: hash,
        weekStart,
        weekEnd,
        openingTime,
        closingTime,
      });
      return res.status(201).json({
        success: false,
        data: new_user,
      });
    } catch (error) {
      console.log(error);
    }
  },
  getPartners: async (req, res, next) => {
    try {
      const partners = await User.findAll({
        raw: true,
        where: {
          is_admin: false,
        },
      });

      return res.status(200).json({
        success: false,
        data: partners,
      });
    } catch (error) {
      console.log(error);
    }
  },

  createPartner: async (req, res, next) => {
    try {
      const userId = req.user.id;
      const user = await User.findByPk(userId);
      // 只有 ADMIN 可以新增使用者
      if (!user.is_admin) {
        return res.status(401).json({
          success: false,
          message: "Permission denied!",
        });
      }
      const {
        name,
        account,
        email,
        phone,
        address,
        password,
        weekStart,
        weekEnd,
        openingTime,
        closingTime,
      } = req.body;

      if (!name || !email || !account || !password) {
        return res.status(400).json({
          success: false,
          message: "Name, account, email and password is required",
        });
      }

      if (!validator.isEmail(email)) {
        return res.status(400).json({
          success: false,
          message: "Invalid email.",
        });
      }

      if (weekStart > weekEnd) {
        return res.status(400).json({
          success: false,
          message: "Invalid time: weekStart cannot exceed weekEnd",
        });
      }
      if (openingTime >= closingTime) {
        return res.status(400).json({
          success: false,
          message: "Invalid time: openingTime cannot exceed closingTime",
        });
      }

      const hash = await bcrypt(password, 10);

      const new_user = await User.create({
        name,
        account,
        email,
        phone,
        address,
        password: hash,
        weekStart,
        weekEnd,
        openingTime,
        closingTime,
      });
      return res.status(201).json({
        success: false,
        data: new_user,
      });
    } catch (error) {
      console.log(error);
    }
  },
  updatePartner: async (req, res, next) => {
    try {
      const userId = req.user.id;
      const user = await User.findByPk(userId);
      const { partnerId } = req.params;

      if (userId !== partnerId && !user.is_admin) {
        return res.status(401).json({
          success: false,
          message: "Permission denied!",
        });
      }

      const {
        name,
        account,
        email,
        phone,
        address,
        password,
        weekStart,
        weekEnd,
        openingTime,
        closingTime,
      } = req.body;

      const partner = await User.findByPk(userId, {
        raw: true,
      });
      if (!partner)
        return res.status(404).json({
          success: false,
          message: "Partner no found",
        });

      if (!name || !email || !account || !password) {
        return res.status(400).json({
          success: false,
          message: "Name, account, email and password is required",
        });
      }

      if (!validator.isEmail(email)) {
        return res.status(400).json({
          success: false,
          message: "Invalid email.",
        });
      }

      if (weekStart > weekEnd) {
        return res.status(400).json({
          success: false,
          message: "Invalid time: weekStart cannot exceed weekEnd",
        });
      }
      if (openingTime >= closingTime) {
        return res.status(400).json({
          success: false,
          message: "Invalid time: openingTime cannot exceed closingTime",
        });
      }

      const updatedPartner = await partner.update({
        name: name || partner.name,
        account: account || partner.account,
        email: email || partner.email,
        phone: phone || partner.phone,
        address: address || partner.address,
        password: password ? await bcrypt.hash(password, 10) : partner.password,
        weekStart: weekStart || partner.weekStart,
        weekEnd: weekEnd || partner.weekEnd,
        openingTime: openingTime || partner.openingTime,
        closingTime: closingTime || partner.closingTime,
      });

      return res.status(200).json({
        success: true,
        data: updatedPartner,
      });
    } catch (error) {
      console.log(error);
    }
  },
  deletePartner: async (req, res, next) => {
    try {
      const userId = req.user.id;
      const { partnerId } = req.params;
      // const partner = await User.findByPk(partnerId);
      const [user, partner] = await Promise.all([
        User.findByPk(userId),
        User.findByPk(partnerId),
      ]);

      if (!user.is_admin) {
        return res.status(401).json({
          success: false,
          message: "Permission denied!",
        });
      }

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
