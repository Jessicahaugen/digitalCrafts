const express = require("express");
const app = express();
const PORT = 3004;
const { readFile } = require("fs");

app.use(express.json());


app.get("/",(req,res)=> {
   const message = ("welcome to my page")
   readFile("./index.html","utf8", (err, html) => {
    res.send(html)
});
});
app.get("/home",(req,res)=> {
    const message = ("welcome to my home")
    readFile("./index3.html","utf8", (err, html) => {
    res.send(html);
    });
    
});

app.get("/aboutme",(req,res)=> {
    const message = ("welcome to about me")
    readFile("./index3.html","utf8", (err, html) => {
        res.send(html);
    });
});

app.get("/FAQ",(req,res)=> {
    const message = ("welcome to my FAQ")
    readFile("./index2.html","utf8", (err, html) => {
        res.send(html);
    });
   
});

app.get("*", (req,res)=> {
    const message = ("uh oh")
    readFile("./index.html","utf8", (err, html) => {
        res.send(html)
    });
});

app.post("/messages:id",(req, res) => {
  console.log(req)
     const {logo} = req.body
     const message = (`your logo is ${logo} and its name is name`)
     res.send(message)
});

app.listen(PORT,() => {
    console.log(`you server is on ${PORT}`);
});