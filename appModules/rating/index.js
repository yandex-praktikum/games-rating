const config = require("./config");
const makeRatingFile = require("./rating-file");
const { createRaiting, updateRating } = require("./calculations");

module.exports = {
  config,
  makeRatingFile,
};
