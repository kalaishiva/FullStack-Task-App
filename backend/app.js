require("dotenv").config();

//connect to db
const { connectToDb } = require("./database/db");

//express
const express = require("express");
const app = express();

//modal
const Task = require("./Modal/taskModal");

//Router
const taskRoutes = require('./Route/taskRoutes');

//MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', taskRoutes);

connectToDb();
module.exports = app;