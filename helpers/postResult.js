/** help filter by key
 *
 * @param index index to remove
 */
exports.filterByTag = (tagString, resultArray) => {
  let { posts } = resultArray;
  let keyArray = tagString.split(",");

  posts = posts?.filter((eachResult) => {
    const { tags } = eachResult;

    for (let eachKey of keyArray) {
      if (tags.indexOf(eachKey) !== -1) {
        return true;
      }
    }

    return false;
  });
  return { posts };
};

/**
 *
 * @param {*} resultArray
 * @returns array
 */
exports.restructure = (resultArray) => {
  const structuredArray = [];
  for (let eachResult of resultArray) {
    structuredArray.push(...eachResult.posts);
  }

  return { posts: structuredArray };
};

exports.unify = (resultArray) => {
  let { posts } = resultArray;
  const seen = [];

  posts = posts?.filter((eachPost) => {
    const { id } = eachPost;
    if (seen.indexOf(id) == -1) {
      seen.push(id);
      return true;
    }
    return false;
  });

  return { posts };
};

/** sort by key in a certain direction
 *
 * @param {*} key
 * @param {*} resultArray
 * @param {*} direction
 * @returns
 */
exports.sortByKey = (key, resultArray, direction = "asc") => {
  let { posts } = resultArray;

  if (direction === "desc") {
    posts = posts.sort((a, b) => (a[key] < b[key] ? 1 : -1));
  } else {
    posts = posts.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  }

  return { posts };
};
