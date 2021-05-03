const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3009;
const Sequelize = require('sequelize');
const { doctors, appointments, patients } = require('./models');


// const es6Renderer = require("express-es6-template-engine");
// app.use(express.urlencoded({ extended: true }));

// middleware
app.use(express.json());
app.use(cors());
// app.engine("html", es6Renderer);
app.set("views", "../views");
app.set("view engine", "html");



//CRUD FOR PATIENTS
app.post("/newPatients", async (req, res) => {
    const { name,email,phone} = req.body;
    const newPatient= await patients.create({
      name,
      email,
      phone,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    res.send(`theres a new patient ${newPatient}`)
});
app.get("/patients", async (req, res) => {
        const getAllPatients = await patients.findAll();
          res.send(`${getAllPatients}`);
});

// app.put("patients:id", async (req, res) => {
//     const {name,email,phone} =req.body;
//     const updatePatients = await patients.update(req.body) {
//         where: { name: name, phone:phone, email:email };

// });


//CRUD FOR DOCTORS
// app.get("/doctors", async (req, res) => {
//     const getAllDoctors = await doctors.findAll();
//       res.send(`${getAllDoctors}`);
// });

// app.post("/doctors", async (req, res) => {
//     const { name,email, } = req.body;
//     const newDoctor= await patients.create({
//       name,
//       email,
//       phone,
//       createdAt: new Date(),
//       updatedAt: new Date()
//     });
//     res.send(`theres a new doctor ${newDoctor}`)
// });



app.listen(PORT, () => {
    console.log(`running on ${PORT}`);
})