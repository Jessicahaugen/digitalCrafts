const express = require("express");
const app = express();
const { readFile } = require("fs");
const read = require('read-css')
const path = require("path")
const PORT = 3006;

app.use('/static', express.static(path.join(__dirname)))

app.get("/", (req, res) => {
    readFile("./index.html","utf8", (err, html) => {
      res.send(html);
    });
});

app.get("/store", (req, res) => {
    readFile("./store.html", "utf8", (err, html) => {
      res.send(html);
    });
});
  
app.get("/contact", (req, res) => {
    readFile("./contact.html", "utf8", (err, html) => {
      res.send(html);
    });
});

app.listen(PORT, () => {
    console.log(`Your server is being hosted on localhost:${PORT}`);
});