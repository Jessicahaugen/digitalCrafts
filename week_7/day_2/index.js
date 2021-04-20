const express = require("express");
const app = express();
const PORT = 3001;



app.use(express.json());


app.get("/",(req,res)=> {
    const message = ("assignment loading");
    res.send(message);
});

app.get("/about",(req,res)=> {
    const message = ("about the company");
    res.send(message);
});

app.get("/team",(req,res)=> {
    const message = ("welcome to our team page");
    res.send(message);
});

app.post("/FAQ", (req,res) => {
    const {info} = req.body;
    const message = (`this is your ${info}`);
    res.send(message);
});


app.listen(PORT, () => {
    console.log(`your server is on ${PORT}`);
});