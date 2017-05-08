const express = require('express');
const bodyparser = require('body-parser');
const jsonres = require('./index.js');


var app = express();
jsonres.setProvider('tester');

app.use(bodyparser());

app.get('/json', (req, res) => {
    jsonres.json(res, "testing json");
});
app.get('/error', (req, res) => {
    jsonres.error(res, "testing error");
});
app.get('/unauthorized', (req, res) => {
    jsonres.unauthorized(res, "testing unauthorized");
});
app.get('/badRequest', (req, res) => {
    jsonres.badRequest(res, "testing badRequest");
});
app.get('/created', (req, res) => {
    jsonres.created(res, "testing created");
});
app.get('/accepted', (req, res) => {
    jsonres.accepted(res, "testing accepted");
});

app.listen(9999);

console.log("app is running on port " + 9999);