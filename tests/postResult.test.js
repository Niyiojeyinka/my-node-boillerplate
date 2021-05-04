const postResult = require("../helpers/postResult");

const payload = [
  {
    posts: [
      {
        author: "Rylee Paul",
        authorId: 9,
        id: 1,
        likes: 960,
        popularity: 0.13,
        reads: 50361,
        tags: ["culture", "health"],
      },
      {
        author: "Trevon Rodriguez",
        authorId: 5,
        id: 3,
        likes: 425,
        popularity: 0.68,
        reads: 11381,
        tags: ["startups", "health"],
      },
      {
        author: "Bryson Bowers",
        authorId: 6,
        id: 5,
        likes: 44,
        popularity: 0.57,
        reads: 94293,
        tags: ["startups", "health"],
      },
    ],
  },
  {
    posts: [
      {
        author: "Rylee Paul",
        authorId: 9,
        id: 1,
        likes: 960,
        popularity: 0.13,
        reads: 50361,
        tags: ["tech", "health"],
      },

      {
        author: "Rylee Paul",
        authorId: 9,
        id: 91,
        likes: 960,
        popularity: 0.13,
        reads: 50361,
        tags: ["tech"],
      },
    ],
  },
];

describe("Helper Test", () => {
  test("retrusctured function restructure as expected", () => {
    const response = postResult.restructure(payload);
    expect(response).toHaveProperty("posts");
    expect(response.posts[0]).toHaveProperty("author");
    expect(response.posts[1]).toHaveProperty("author");
  });

  test("unify function test -/ test it returns array unique objects", () => {
    let response = postResult.restructure(payload);
    response = postResult.unify(response);
    expect(response).toHaveProperty("posts");
    expect(response.posts.length).toBe(4);
  });

  test("filterByKey  function test -/ test it returns array of unique objects", () => {
    let response = postResult.restructure(payload);
    response = postResult.unify(response);
    response = postResult.filterByTag("culture,tech", response);
    expect(response).toHaveProperty("posts");
    expect(response.posts.length).toBe(2);
  });

  test("sortByKey  function test -/ test it sort in descending order", () => {
    let response = postResult.restructure(payload);
    response = postResult.unify(response);
    response = postResult.filterByTag("culture,tech", response);
    response = postResult.sortByKey("id", response, "desc");
    expect(response).toHaveProperty("posts");
    expect(response.posts[0].id).toBeGreaterThan(response.posts[1].id);
  });

  test("sortByKey  function test -/ test it sort in ascending order", () => {
    let response = postResult.restructure(payload);
    response = postResult.unify(response);
    response = postResult.filterByTag("culture,tech", response);
    response = postResult.sortByKey("id", response);
    expect(response).toHaveProperty("posts");
    expect(response.posts[1].id).toBeGreaterThan(response.posts[0].id);
  });
});
