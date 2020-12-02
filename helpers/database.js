const mongoose = require("mongoose");
const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

exports.connect = (url) => {
  mongoose
    .connect(url, config)
    .then(function () {
      console.log("DB connected Successfully");
      //console.clear();
    })
    .catch(function (error) {
      console.log("Error Connected " + error);
    });
};
