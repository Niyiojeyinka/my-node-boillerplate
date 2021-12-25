const User = require("../models/user.model");
const bcrypt = require("bcrypt");
exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      throw "Error";
    }

    const valid = await bcrypt.compare(req.body.password, user.password);

    if (!valid) {
      throw "Not valid";
    }

    const token = jwt.sign({ userId: user._id }, "RANDOM_KEY", {
      expiresIn: "24h",
    });

    return res.status(200).json({
      data: {
        userId: user._id,
        token: token,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.register = async (req, res, next) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 10);

    const user = await User.create({
      email: req.body.email,
      password: hash,
    });

    return res.status(200).json({
      result: 1,
      data: {
        message: "User Added Successfully!",
      },
    });
  } catch (error) {
    next(error);
  }
};
