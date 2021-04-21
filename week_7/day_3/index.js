const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3002;
const pool = require("./db.js");


app.use(express.json());
app.use(cors())

app.get("/", (req,res) => {
    res.send("welcome to node server")

});

app.post("/todo", async (req,res) => {
   try {
       const {description} = req.body;
       const newToDoinDB = await pool.query("INSERT INTO todo (description) VALUES($1)", [description]);
    res.json(newToDoinDB)

   } catch (err){
       console.log(err.message)

   }

});

app.get("/read_todos", async (req,res) => {
    try {
        const newToDoinDB = await pool.query("SELECT * from todo");
        res.json(newToDoinDB)
 
    } catch (err){
        console.log(err.message)
    }
    
});
app.listen(PORT, () => {
    console.log(`your port is on ${PORT}`)

});