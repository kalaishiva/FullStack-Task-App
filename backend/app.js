require("dotenv").config();
const express = require("express");
const app = express();

//MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/', taskRoutes)


module.exports = app;