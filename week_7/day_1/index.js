console.log("hi")
const http = require("http")
//import file name from ""
const address = "127.0.0.1"
const PORT = 3002

const server =  http.createserver((req,res) => {
    res.statusCode = 200;
    res.setHeader =  ("Content-Type", "text/plain");
    res.end = ("hello");
});

server.listen (PORT, address () => {
    console.log(`server is on https://${address}: ${PORT}`)

});

