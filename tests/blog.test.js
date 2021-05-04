const request = require("supertest");
const app = require("../app");

describe("Blog Enpoints", () => {
  test("service is available", async (done) => {
    const response = await request(app).get("/api/ping");
    expect(response.status).toBe(200);
    expect(response.body.success).toBeTruthy();
    done();
  });

  test("GET -/posts Test tag parameter is required", async (done) => {
    const response = await request(app).get("/api/posts");
    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Tags parameter is required");
    done();
  });

  test("GET -/posts Test cannot accept invalid sort key", async (done) => {
    const response = await request(app).get(
      "/api/posts?tags=history,tech&sortBy=follow"
    );
    expect(response.status).toBe(400);
    expect(response.body.error).toBe("sortBy parameter is invalid");
    done();
  });

  test("GET -/posts Test cannot accept invalid sort direction", async (done) => {
    const response = await request(app).get(
      "/api/posts?tags=history,tech&sortBy=id&direction=acce"
    );
    expect(response.status).toBe(400);
    done();
  });

  test("GET -/posts Test valid query return result and correct sorting(Ascending) ", async (done) => {
    const response = await request(app).get(
      "/api/posts?tags=tech,health&sortBy=id&direction=asc"
    );
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("posts");
    expect(response.body.posts[1].id).toBeGreaterThan(
      response.body.posts[0].id
    );
    done();
  });

  test("GET -/posts Test valid query return result and correct sorting(Descending) ", async (done) => {
    const response = await request(app).get(
      "/api/posts?tags=tech,health&sortBy=id&direction=desc"
    );
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("posts");
    expect(response.body.posts[0].id).toBeGreaterThan(
      response.body.posts[1].id
    );
    done();
  });
});
