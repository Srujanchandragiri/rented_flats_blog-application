const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
//const port = 6000;

mongoose.connect('mongodb+srv://Srujan:Srujanc12@atlascluster.gjrriix.mongodb.net/rentalapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
 
app.use(cors());



const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
});

const UserSchema = mongoose.Schema({
    title: String,
    date: String,
    rent: String,
    content: String,
    image: String,
    link: String,

    
});

const UserModel = mongoose.model('user', UserSchema);
app.get('/getUser', (req, res) => {
    UserModel.find({})
        .then(function (user) {
            console.log(user); // Log the retrieved data
            res.json(user);
        })
        .catch(function (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});
/*app.get('/getUser', (req, res) => {
    UserModel.find({})
        .then(function (users) {
            res.json(users);
        })
        .catch(function (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});*/

app.listen(3000, () => {
    console.log("Server is Running");
});
