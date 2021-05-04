module.exports = (req, res, next) => {
  try {
    const sortsAllow = ["asc", "desc"];
    if (
      sortsAllow.indexOf(req.query.direction?.toLowerCase()) == -1 &&
      req.query.direction != undefined
    ) {
      throw {
        message: "direction parameter is invalid",
        statusCode: 400,
      };
    } else {
      next();
    }
  } catch (e) {
    return res.status(e.statusCode).json({
      error: e.message,
    });
  }
};
