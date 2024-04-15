const fs = require("fs");
const mimeTypes = require("./mime-types");

function staticFile(res, filePath, ext) {
  const contentType = mimeTypes[ext];
  if (!contentType) {
      res.statusCode = 415; 
      return res.end("Unsupported file type");
  }
  res.setHeader("Content-Type", contentType);
  fs.readFile("./public" + filePath, (err, data) => {
      if (err) {
          res.statusCode = 404;
          return res.end("Not Found");
      }
      res.end(data);
  });
}

module.exports = staticFile
