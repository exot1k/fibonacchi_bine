// index.js
const express = require('express');
const app = express();
const path = require("path")

// регистрация endpoint-а
require('./api/index.js')(app);

app.use(express.static(path.join(__dirname, 'static')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+ '/static/index.html'));
});

app.listen(3333, () => {
    console.log('server started!');
});