const express = require('express');
const app = express();

const path = require("path");
app.use(express.static(path.resolve(__dirname, "./public/dist")));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extends:true}));
app.use(bodyParser.json());

const route_setter = require('./server/config/routes.js');
route_setter(app);

app.listen(8000, function () {
    console.log("listening on port 8000");
});