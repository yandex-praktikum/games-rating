const makeRatingFile = require('./rating-file');
const config = require('./config');
const { updateRating, createRating } = require('./calculations');

module.exports = {
    config,
    makeRatingFile,
    updateRating,
    createRating
};