const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const request = require("request");
const carlist = require("./data/carlist");
var Car = require("./models/car.js");

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const mongodb_conn_module = require("./dbconn");
var db = mongodb_conn_module.connect();

app.get('/', (req, res) => {
    res.send(`Hi! Server is listening on port ${port}.`)
});

app.get('/cars', (req, res) => {
  res.send(carlist);
});


const port = 8000;
app.listen(port);