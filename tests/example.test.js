const dbURL = "mongodb://localhost:27017/testdb";
const database = require("./helpers/database");
beforeAll(async () => {
  database.connect(dbURL);
});
