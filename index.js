// const {add, sub, calc} = require('./math');
// console.log(add(2, 8));

const fs = require("fs");
const http = require("http");

// My server is created
const myServer = http.createServer((req, res) => {
  const log = `\n${new Date(Date.now()).toLocaleString("en-IN")}:${
    req.url
  }: New Request received!\n`;
  fs.appendFile("./users.txt", log, (err, data) => {
    // console.log("New request received", req.headers);
    switch (req.url) {
      case "/":
        res.end("Hello From the Home page!");
        break;
      case "/about":
        res.end("About Page");
      default:
        res.end("Page Not Found - 404!");
    }
  });
});

myServer.listen(8000, () => {
  console.log("Your Server has started!");
});
