const express = require("express");
const app = express();
const PORT = 3005

app.get("/", (req,res) => {
    const message = ("Hello to my first node server");
    res.send(message);
});

app.listen(PORT, () => {
    console.log(`Your server is being hosted on localhost:${PORT}`);
  });