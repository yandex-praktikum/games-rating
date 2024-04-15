const {parseBody} = require('../appModules/http-utils')
const {createRating, config, updateRating} = require("../appModules/rating");
const  fs =require('fs').promises;
async function voteRouteController(req,res){
    if (req.method !== 'POST'){
        res.statusCode = 404;
        res.end('Not found')
    } else{
        res.statusCode = 200;
        const body = await parseBody(req);
        const data = JSON.parse(body)
        const rating = createRating(data, config.WEIGHT)
        const ratingFile = await fs.readFile(config.PATH_TO_RATTING_FILE);
        const ratingArray = JSON.parse(ratingFile);
        const newRating = updateRating(ratingArray, data.id, rating);

        await fs.writeFile(config.PATH_TO_RATTING_FILE, JSON.stringify(newRating))
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(newRating.sort((a,b) => b.rating - a.rating)));
    }
}
module.exports = voteRouteController