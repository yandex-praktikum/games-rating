const { staticFile } = require("../appModules/http-utils");
const { getData, endpoints } = require("../appModules/api");
const { makeRatingFile, config } = require("../appModules/rating");

async function mainRouteController(res, publicUrl, extname) {
  const games = await getData(endpoints.games);
  await makeRatingFile(config.PATH_TO_RATING_FILE, games);
  res.statusCode = 200;
  staticFile(res, publicUrl, extname);
}
module.exports = mainRouteController;
