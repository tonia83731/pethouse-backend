const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authController = {
  login: async (req, res, next) => {
    try {
      const { account, password } = req.body;
      if (!account || !password)
        return res.status(400).json({
          success: false,
          message: "Account, password cannot be blank",
        });

      const user = await User.findOne({
        where: { account },
      });
      if (!user)
        return res.status(404).json({
          success: false,
          message: "User does not exist",
        });
      if (!bcrypt.compareSync(password, user.password))
        return res.status(400).json({
          success: false,
          message: "Account or password incorret",
        });

      const payload = {
        id: user.id,
        account: user.account,
        email: user.email,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "3d",
      });

      const userData = user.toJSON();
      delete userData.password;

      return res.status(200).json({
        success: true,
        data: {
          user: userData,
          token,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = authController;
