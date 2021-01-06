const request = require("supertest");
const app = require("../app");
const db = require("../models/");

beforeAll(async (donr) => {
  // force: true will drop the table if it already exists
  db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and Resync with { force: true }");
  });
  done();
});
/*
afterAll(async () => {
});
*/
describe("Test Url can be shortened", async () => {
  test("Url can be shortened", async (done) => {
    const response = await request(app).post("/api/create").send({});

    expect(response.status).toBe(201);
    done();
  });
});
