const express = require("express");
const app = express();
const PORT = 3004;
const cors = require("cors");
const pool = require("./db.js");

app.use(express.json())
app.use(cors())


app.get("/", (req,res) => {
    
});
app.post("/recipes", async (req, res) => {
    try {
        const {recipe,vegan} = req.body;
        
        const newRecipe = await pool.query(
            "INSERT INTO recipes (recipe,vegan) VALUES($1,$2)",
            [recipe,vegan]
            );
            res.json(newRecipe.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/", async (req, res) => {
    try {
        const getRecipes = await pool.query(
        "SELECT * from recipes ORDER BY cookbook_id"
        );
      res.json(getRecipes.rows);
    } catch (err) {
        console.log(err.message);
    }
});

app.put("/update/", async (req, res) => {
    try {
      const { id } = req.params;
      const {recipe,vegan} = req.body;
  
      const updateRecipe = await pool.query(
        "UPDATE recipes SET (recipe,vegan) = ($1,$2) WHERE cookbook_id = $3",
        [recipe,vegan,id]
    );
      res.json("you have updated your recipe");
    } catch (err) {
      console.error(err.message);
    }
});

app.delete("/delete/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteRecipe = await pool.query(
        "DELETE FROM recipes WHERE cookbook_id = $1",
        [id]
      );
      res.json("recipe has been deleted");
    } catch (err) {
      console.log(err.message);
    }
});



app.listen(PORT,() =>  {
    console.log(`listening on ${PORT}`)
});

