console.log("hi")
const http = require("http");
const express = require("express");
const { response } = require("express");
const app = express();
const address = "127.0.0.1";
const PORT = 3002;
const {readFile} = require("fs");

//import file name from ""
// const server =  http.createserver((req,res) => {
//     res.statusCode = 200;
//     res.setHeader =  ("Content-Type", "text/plain");
//     res.end = ("hello");
// });

// server.listen(PORT, address, () => {
//     console.log(`server is on https://${address}:${PORT}
//     `)

// });

app.get("/",(req,res) => {
res.end = ("hello");
});

app.listen(PORT,() => {
    console.log(`your server is on ${PORT}`)
})
