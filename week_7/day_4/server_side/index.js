const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./pool.js");
const PORT = process.env.port || 3003;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to our trial");
});


app.post("/assignments", async (req, res) => {
    try {
        const {subject,title,due} = req.body;
        
        const newAssignment = await pool.query(
            "INSERT INTO Assignments (subject,title,due) VALUES(1,2,h3)",
            [subject,title,due]
            );
            res.json(newAssignment.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/assignments", async (req, res) => {
    try {
        const getAssignments = await pool.query(
        "SELECT * from Assignments ORDER BY hw_id"
        );
      res.json(getAssignments.rows);
    } catch (err) {
        console.log(err.message);
    }
});

app.get("/assignments/:id", async (req, res) => {
try {
    const { id } = req.params;
    const getAssignments = await pool.query(
    "SELECT * from Assignments WHERE hw_id = $1 ORDER BY hw_id",
    [id]
    );
    res.json(getAssignments.rows);
} catch (err) {
    console.log(err.message);
}
});

app.put("/update/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const {subject,title,due} = req.body;
  
      const updateAssignment = await pool.query(
        "UPDATE assignments SET (subject,title,due) = ($1,$2,$3) WHERE hw_id = $4",
        [subject,title,due,id]
    );
      res.json("you have updated");
    } catch (err) {
      console.error(err.message);
    }
});

app.delete("/delete_assignment/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteAssignment = await pool.query(
        "DELETE FROM assignments WHERE hw_id = $1",
        [id]
      );
      res.json("its been deleted");
    } catch (err) {
      console.log(err.message);
    }
});
                    
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});