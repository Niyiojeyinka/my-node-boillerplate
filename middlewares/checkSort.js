module.exports = (req, res, next) => {
  try {
    const sortsAllow = ["id", "reads", "likes", "popularity"];
    if (
      sortsAllow.indexOf(req.query.sortBy?.toLowerCase()) == -1 &&
      req.query.sortBy != undefined
    ) {
      throw {
        message: "sortBy parameter is invalid",
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
