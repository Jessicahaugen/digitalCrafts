const express = require("express");
const app = express();
const PORT = 3004;




app.get("/",(req,res)=> {
    const message = ("welcome to my page!");
    res.send(message)
});

app.listen(PORT, () => {
    console.log(`you server is on localhost: ${PORT}`);
    
    
});