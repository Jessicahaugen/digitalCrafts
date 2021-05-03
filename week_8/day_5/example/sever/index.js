if(process.env.NODE_ENV !== "production"){ 
     require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const app = express();
const bcrypt = require("bcrypt");
const passport = require("passport");
const flash = require("express-flash");
const session = requie("express-session");

const PORT = 3011;

// middleware 
app.use(express.static("../public"));
app.use(flash());
app.use(express.json());
app.use(cors());
app.use(express.json());
app.engine("html", es6Renderer);
app.set("views", "../views");
app.set("view engine", "html");
// access our form information inside of our req
app.use(express.urlencoded({ extended: false }));


//this is mimicing a databse 
const user = [] ;

//routes 

app.get("/", (req,res) => {
    res.render("home")
})
app.get("/login", (req,res) => {
    res.render("login")
})
app.get("/register", (req,res) => {
    res.render("register")
})

app.listen(PORT, () => {
    console.log(`running on ${PORT}`);
})