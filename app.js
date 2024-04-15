const http = require('http');
const mainRouteController = require('./controllers/main');
const defaultRouteController = require('./controllers/default');
const gameRouteController = require('./controllers/game');
const voteRouteController = require('./controllers/vote');

const server = http.createServer((req, res) => {
    const url = req.url
        switch (url) {
            case '/':
            mainRouteController(res, '/index.html', '.html')
                break;

            case '/game':
            gameRouteController(res)
                break;

            case '/vote':
            voteRouteController(res, req)
                break;

                default:
                defaultRouteController(res, url)
                break;
        }
    });

const PORT = process.env.PORT || 3005;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT} , complete!`);
});