const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our Homepage");
  }
   else if (req.url === "/about") {
    res.end("About page");
  }
  else {
    res.end('error')
  }
});

server.listen(4200);
