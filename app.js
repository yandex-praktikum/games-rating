const http = require("http");
const gameRouteController = require("./controllers/game");
const defaultRouteController = require("./controllers/default");
const mainRouteController = require("./controllers/main");
const voteRouteController = require("./controllers/vote");
const PORT = 3000
const server = http.createServer((req, res) => {
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
            break
      // ...другие маршруты
    }
  });
  server.listen(PORT)