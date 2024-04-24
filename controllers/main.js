const { staticFile } = require("../appModules/http-utils/index");
const { getData, endpoints } = require("../appModules/api/index");
const { config } = require("../appModules/rating/index");
const { makeRatingFile } = require("../appModules/rating/index");

async function mainRouteController(res, publicUrl, extname) {
  try {
    const data = await getData(endpoints.games);
    await makeRatingFile(config.PATH_TO_RATING_FILE, data);
    res.statusCode = 200;
    staticFile(res, publicUrl, extname);
  } catch (error) {
    console.error("Ошибка:", error.message);
    console.log(error);
  }
}

module.exports = mainRouteController;
