const express = require("express");
const app = express();
const Sequelize = require('sequelize');
const PORT = 3008;
const { User, Photo } = require('./models');

app.use(express.json())



app.get('/users/photos', async (req, res) => {
    const users = await User.findAll({
        include: [{
            model: Photo
        }]
    });
    res.json(users);
});

app.get('/photos/users', async (req, res) => {
    const photos = await Photos.findAll({
        include: [{
            model: User
        }]
    });
    res.json(photos);
});

app.post('/users', async (req, res) => {
    const { firstName, lastName, email } = req.body;
    const newUser = await User.create({
        firstName,
        lastName,
        email
    });
    
    res.json({
        id: newUser.id
    });
})

app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

app.get('/users/by-last-name', async (req, res) => {
    const users = await User.findAll({
        attributes: ['lastName']
    });
    res.json(users);
});
app.get('/users/:id', async (req, res) => {
    const oneUser = await User.findByPk(req.params.id);
    res.json(oneUser);
});
app.get('/users/:id', async (req, res) => {
    try{
        const oneUser = await User.findByPk(req.params.id);
        res.json(oneUser);
    } catch (e) {
        console.log(e);
        res.status(404).json({
            message: 'User not found'
        });
    }
});
app.post('/users/search', async (req, res) => {
    const users = await User.findAll({
        where: {
            [Sequelize.Op.or]: [
                { 
                    firstName: req.body.term,
                    lastName: req.body.term
                }
            ]
        },
        include: [{
            model: Photo
        }]
    });
    res.json(users);
});

app.post('/users/search', async (req, res) => {
    const users = await User.findAll({
        where: {
            [Sequelize.Op.or]: [
                { 
                    firstName: req.body.term,
                    lastName: req.body.term
                }
            ]
        }
    });
    res.json(users);
});
app.post('/users/:id', async (req, res) => {
    const { id } = req.params;
  
    const updatedUser = await User.update(req.body, {
      where: {
        id
      }
    });
    
    res.json(updatedUser);
});
app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    const deletedUser = await User.destroy({
        where: {
            id
        }
    });
    res.json(deletedUser);
});

app.listen(PORT, () => {
    console.log(`you are listening on ${PORT}`);
});