const mongoose = require("mongoose")
const userSchema = require("../models/user")
const errorHandler = require("../utils/errorHandler")
const User = require("../models/user");

module.exports.changeProfile = async (req, res) => {
  if (req.body) {
    await userSchema.updateMany({_id: req.user._id},
        {
          firstName: req.user.firstName,
          lastName: req.user.lastName,
          description: req.user.description,
          image: req.user.image
        })
  }
  const candidate = await User.findOne({email: req.user.email})

  try {
    const profile = {
      firstName: candidate.firstName,
      lastName: candidate.lastName,
      image: candidate.image,
      description: candidate.description
    }
    res.status(200).json(profile)
  } catch (e) {
    errorHandler(res, e)
  }
}