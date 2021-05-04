const fetch = require("node-fetch");
const postResult = require("../helpers/postResult");
const redis = require("redis");
const util = require("util");
const client = redis.createClient(process.env.REDIS_PORT);
client.get = util.promisify(client.get);

exports.posts = async (req, res) => {
  try {
    let responsePayload = "";
    const saveQuery = JSON.stringify(req.query);

    //check if cache is available
    const savedData = await client.get(saveQuery);

    if (savedData) {
      responsePayload = JSON.parse(savedData);
    } else {
      //return  fresh and save to cache
      const { sortBy, direction } = req.query;
      const tagsArray = req.query.tags.split(",");

      const urls = tagsArray.map(async (eachTag) => {
        return fetch(
          `https://api.hatchways.io/assessment/blog/posts?tag=${eachTag}`
        );
      });

      let responses = await Promise.all(urls);

      responses = await Promise.all(
        responses.map((response) => {
          return response.json();
        })
      );

      responses = postResult.restructure(responses);
      responses = postResult.unify(responses);
      //make each element object unique
      responses = postResult.sortByKey(sortBy, responses, direction);
      //sort by key and direction

      //cache it
      client.set(saveQuery, JSON.stringify(responses));
      responsePayload = { ...responses };
    }
    return res.status(200).json(responsePayload);
  } catch (e) {
    console.log(e);
    return res.status(e.statusCode || 400).json({
      error: e.message || "Error occured",
    });
  }
};

exports.ping = (req, res) => {
  return res.status(200).json({
    success: true,
  });
};
