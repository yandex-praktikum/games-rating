
const config = require("./config");
const makeRatingFile = require("./rating-file");
const { updateRating, createRating } = require("./calculations")

module.exports = {
    config,
    makeRatingFile,
    updateRating,
    createRating
}
