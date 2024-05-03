const http = require('http');
const { defaultRouteController, gameRouteController, mainRouteController, voteRouteController } = require('./app/controllers');

const server = http.createServer((req, res) => {
    const url = req.url;
    let data = '';
    switch (url) {
        case '/':
            mainRouteController(res, "/index.html", ".html");;
            break;
        case "/game":
            res.statusCode = 200;
            gameRouteController(res);
            break;
        case '/vote':
            voteRouteController(req, res);
            break;
        default:
            defaultRouteController(res, url);
            break;
    }
});

server.listen(3005);