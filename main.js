'use strict';
const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: true}));

app.use(express.static(__dirname));
app.get('/', (req, res, next) => {
    res.sendFile('index.html');
});

var users = [];

app.post('/users', function (req, res) {
    const user = req.body;
    user.birthday = new Date(user.birthday);
    user.id = Date.now();
    users.push(user);
    res.json(user);
});

app.listen(3000, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('app listening on port 3000'); });