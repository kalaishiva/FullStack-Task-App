require("dotenv").config();
const express = require("express");
const app = express();
const taskRoutes = require('./Route/taskRoutes');

//MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', taskRoutes)


module.exports = app;