module.exports = (sequelize, Sequelize) => {
  const Url = sequelize.define("url", {
    link: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    shortCode: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    status: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  });

  return Url;
};
