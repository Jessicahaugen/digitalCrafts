const express = require("express");
const app = express();
const PORT = 3004;
const cors = require("cors");
const pool = require("./db.js");
const es6Renderer = require("express-es6-template-engine");


app.use(express.json());
app.use(cors());
app.engine("html", es6Renderer);
app.set("views", "../template")
app.set("view engine", "html")
app.use(express.urlencoded({
  extended: true
}))

const ROOT = "/home";

app.get("/home", async (req, res) => {
  const recipes = await pool.query(
    "SELECT * from recipes ORDER BY cookbook_id DESC"
  );

  res.render("home", { locals: { recipes: recipes.rows }});
});

app.post("/recipe", async (req, res) => {
    try {
        const {recipe,vegan} = req.body;
        
        const newRecipe = await pool.query(
            "INSERT INTO recipes (recipe,vegan) VALUES($1,$2)",
            [recipe,vegan]
            );
        res.redirect(ROOT);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/recipes", async (req, res) => {
    try {
        const getRecipes = await pool.query(
        "SELECT * from recipes ORDER BY cookbook_id"
        );
      res.render("recipes", { locals: { recipes: getRecipes.rows } });
    } catch (err) {
        console.log(err.message);
    }
});

app.post("/update/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const {recipe,vegan} = req.body;
  
      const updateRecipe = await pool.query(
        "UPDATE recipes SET (recipe,vegan) = ($1,$2) WHERE cookbook_id = $3",
        [recipe,vegan,id]
    );
      res.send("updated");
    } catch (err) {
      console.error(err.message);
    }
});

app.post("/delete/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteRecipe = await pool.query(
        "DELETE FROM recipes WHERE cookbook_id = $1",
        [id]
      );
      res.redirect(ROOT);
    } catch (err) {
      console.log(err.message);
    }
});

app.listen(PORT,() =>  {
    console.log(`listening on ${PORT}`)
});

