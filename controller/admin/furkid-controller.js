const { Furkid, User, Adoption } = require("../../models");
const {
  animalType,
  animalGender,
  animalSize,
  animalAge,
} = require("../../datas/animal-datas");
const { imgurFileHandler } = require("../../helpers/file-helpers");

const adminFurkidController = {
  getFurkids: async (req, res, next) => {
    try {
      const response = await Furkid.findAll({
        nest: true,
        include: [User, Adoption],
      });

      let furkids = response.map((furkid) => ({
        ...furkid.toJSON(),
        partner: {
          id: furkid.partnerId,
          name: furkid.User.name,
        },
        adoptionNumber: Adoption.length,
        User: undefined,
        Adoption: undefined,
        partnerId: undefined,
      }));

      return res.status(200).json({
        success: false,
        data: furkids,
      });
    } catch (error) {
      console.log(error);
    }
  },
  getFurkid: async (req, res, next) => {
    try {
      const { furkidId } = req.params;
      const response = await Furkid.findByPk(furkidId, {
        include: [User, Adoption],
      });

      if (!response)
        return res.status(404).json({
          success: false,
          message: "Furkid not found",
        });

      const responseJSON = response.toJSON();
      const furkid = {
        ...responseJSON,
        partner: {
          id: responseJSON.userId,
          name: responseJSON.User.name,
        },
        User: undefined,
      };

      return res.status(200).json({
        success: true,
        data: furkid,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
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
        userId,
        isNeutured,
        isVaccinated,
      } = req.body;

      const { file } = req;
      const filePath = await imgurFileHandler(file);

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
      if (!userId)
        return res.status(400).json({
          success: false,
          message: "UserId cannot be blank",
        });

      const furkid = await Furkid.create({
        name,
        gender,
        animal,
        size,
        age,
        userId,
        isNeutured: isNeutured ? isNeutured : false,
        isVaccinated: isVaccinated ? isVaccinated : false,
        avatar: filePath | "https://imgur.com/UZ1sYRu",
      });

      return res.status(201).json({
        success: true,
        data: furkid,
      });
    } catch (error) {
      console.log(error);
    }
  },
  updateFurkid: async (req, res, next) => {
    try {
      const { furkidId } = req.params;
      const {
        name,
        gender,
        animal,
        size,
        age,
        userId,
        isNeutured,
        isVaccinated,
      } = req.body;
      const { file } = req;

      // console.log(
      //   name,
      //   gender,
      //   animal,
      //   size,
      //   age,
      //   userId,
      //   isNeutured,
      //   isVaccinated,
      //   file
      // );

      const furkid = await Furkid.findByPk(furkidId);

      if (!furkid)
        return res.status(404).json({
          success: false,
          message: "Furkid no found",
        });

      if (name && name.trim() === "") {
        return res.status(400).json({
          success: false,
          message: "Name cannot be blank",
        });
      }
      if (gender && !animalGender.includes(gender)) {
        return res.status(400).json({
          success: false,
          message: "Invalid gender value",
        });
      }
      if (animal && !animalType.includes(animal)) {
        return res.status(400).json({
          success: false,
          message: "Invalid animal type value",
        });
      }
      if (size && !animalSize.includes(size)) {
        return res.status(400).json({
          success: false,
          message: "Invalid size value",
        });
      }
      if (age && !animalAge.includes(age)) {
        return res.status(400).json({
          success: false,
          message: "Invalid age value",
        });
      }
      if (!userId) {
        return res.status(400).json({
          success: false,
          message: "UserId cannot be blank",
        });
      }
      const filePath = file ? await imgurFileHandler(file) : furkid.avatar;
      const updated_furkid = await furkid.update({
        name: name || furkid.name,
        gender: gender || furkid.gender,
        animal: animal || furkid.animal,
        size: size || furkid.size,
        age: age || furkid.age,
        userId: userId || furkid.userId,
        isNeutured: isNeutured || furkid.isNeutured,
        isVaccinated: isVaccinated || furkid.isVaccinated,
        avatar: filePath,
      });
      return res.status(200).json({
        success: true,
        data: updated_furkid,
      });
    } catch (error) {
      console.log(error);
    }
  },
  deleteFurkid: async (req, res, next) => {
    try {
      const { furkidId } = req.params;
      const furkid = await Furkid.findByPk(furkidId);

      if (!furkid)
        return res.status(404).json({
          success: false,
          message: "Furkid no found",
        });
      await furkid.destroy();
      return res.status(200).json({
        success: true,
        message: "Furkid delete successfully",
      });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = adminFurkidController;
