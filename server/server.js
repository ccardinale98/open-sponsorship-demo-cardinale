const routes = require('./controllers');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path')
require('./mongo');

app.use(bodyParser.json());
app.use(cors());

app.use(routes)
app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
})

app.listen(process.env.PORT || 8080, () => {
    console.log("Server started: " + process.env.PORT || 8080);
});

/**
 * TODO: create auth for api routes
 * as it stands the api can be accessed from anywhere
 * adding an authentification method can prevent this
 */