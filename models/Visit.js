module.exports = (sequelize, Sequelize) => {
  const Visit = sequelize.define("visit", {
    urlId: {
      type: Sequelize.INTEGER,
    },
    platform: {
      type: Sequelize.STRING,
    },
    browser: {
      type: Sequelize.STRING,
    },
  });

  return Visit;
};
