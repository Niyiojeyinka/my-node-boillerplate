const fetch = require("node-fetch");
/**
 *
 * @param {*} url  endpoint url
 * @param {*} method GET,POST,DELETE,PUT,UPDATE
 * @param {*} type json || formdata
 * @param {*} data  data object
 * @param {*} token  bearer token
 */
exports.request = async (
  url,
  method,
  type = "json",
  data = {},
  token = null
) => {
  const meta = { method };
  if (type == "json") {
    meta["headers"]["Content-Type"] = "application/json";
    if (method != "GET" || method != "DELETE") {
      meta["body"] = JSON.stringify(data);
    }
  } else {
    let formData = new FormData();

    for (let field of Object.keys(data)) {
      formData.append(field, data[field]);
    }
    meta["body"] = formData;
  }
  if (token) {
    meta["headers"]["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(url, meta);
  const responseData = await res.json();
  return {
    status: res.status,
    body: responseData,
  };
};
