const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/key');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

//connect to mongoDB
mongoose.connect(keys.mongodb.dbURL, () => {
    console.log('connected to mongodb');
});

//home route
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('app started');
});
