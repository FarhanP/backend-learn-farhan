// const {add, sub, calc} = require('./math');
// console.log(add(2, 8));

const fs = require("fs");
const http = require("http");
const url = require("url");
const express = require("express");

const app = express();

// Express handles route, type of request automatically
app.get("/", (req, res) => {
  return res.end(`Hello from homepage!`);
});

app.get("/about", (req, res) => {
  const queryParam = req.query.name;
  console.log(req.query.name);
  return res.end(`Hello from about page, ${queryParam}!`);
});

// Handling routes, request/response through node
function handler(req, res) {
  const log = `\n${new Date(Date.now()).toLocaleString("en-IN")}:${req.url}: ${
    req.method
  } New Request received!\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("./users.txt", log, (err, data) => {
    // console.log("New request received", req.headers);
    switch (myUrl.pathname) {
      case "/":
        res.end("Hello From the Home page!");
        break;
      case "/about":
        const queryParamName = myUrl.query.name;
        res.end(`About Page, my name is ${queryParamName}`);
      default:
        res.end("Page Not Found - 404!");
    }
  });
}

// Listening to the server via Express
app.listen("8000", () => {
  console.log("Server started via Express!");
});

// My server is created using node
// const myServer = http.createServer(app);

// myServer.listen(8000, () => {
//   console.log("Your Server has started!");
// });
