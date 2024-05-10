const gameRouteController = require('./game');
const defaultRouteController = require('./default');
const mainRouteController = require('./main');
const voteRouteController = require('./vote');

module.exports = {
    mainRouteController,
    gameRouteController,
    defaultRouteController,
    voteRouteController
}