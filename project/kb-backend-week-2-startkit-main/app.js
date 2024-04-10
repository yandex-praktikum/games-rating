const http = require('http'); // импорт http
const staticFile = require('./appModules/http-utils/static-file');
const path = require('path');
const mimeTypes = require('./appModules/http-utils/mime-types');
const voteRouteController = require('./controllers/vote');
const mainRouteController = require("./controllers/main");
const gameRouteController = require("./controllers/game");
const defaultRouteController = require("./controllers/default");
const server = http.createServer((req, res) => { // создали сервер
    // функция, запускаящаяся при получении запроса

    let data = '';
    req.on('data', (chunk) => {
        console.log(chunk);
        data += chunk.toString();
    });
    req.on('end', () => {
        try {
            const jsonData = JSON.parse(data);
            console.log(jsonData);
        } catch {
            console.log('Ошибка разбора JSON');
        }
    });

    const url = req.url;
    switch (url) {
        case "/":
            mainRouteController(res, "/index.html", ".html");
            break;

        case "/game":
            gameRouteController(res);
            break;

        case "/vote":
            voteRouteController(req, res);
            break;

        default:
            defaultRouteController(res, url);
    }
});

server.listen(3005);