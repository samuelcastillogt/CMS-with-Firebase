'use strict';
const express = require('express');
const path = require('path');
const ejs = require("ejs")

const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'static'), {
    etag: false,
  }));

const router = express.Router();
router.get('/', (req, res) => {
  res.render("index")
});
router.get('/hlola', (req, res) => {
  res.send("hola como estas")
});
app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.render("index"));
app.get("/hlola", (req, res)=>{res.send("hola como estas")})

module.exports = app;
module.exports.handler = serverless(app);