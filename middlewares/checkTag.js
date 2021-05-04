module.exports = (req, res, next) => {
  try {
    if (!req.query.tags) {
      throw {
        message: "Tags parameter is required",
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
