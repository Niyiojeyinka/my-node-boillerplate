exports.url = (req) => req.protocol + "://" + req.get("host");
