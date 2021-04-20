const express = require("express");
const app = express();
const PORT = 3001;
const { readFile } = require("fs");



app.use(express.json());


app.get("/",(req,res)=> {
    readFile("./home.html", "utf8", (err, html) => {
        res.send(html);  
    });
});

app.get("/about",(req,res)=> {
    // const message = ("about the company");
    readFile("./about.html","utf8",(err,html) => {
        res.send(html);

    });
   
});

app.get("/info",(req,res)=> {
    // const message = ("welcome to our info page");
    readFile( "./info.html","utf8",(err,html) => {
        res.send(html);

    });
});

app.post("/FAQ", (req,res) => {
    const {info} = req.body;
    const message = (`this is your ${info}`);
    res.send(message);
  
});


app.listen(PORT, () => {
    console.log(`your server is on ${PORT}`);
});