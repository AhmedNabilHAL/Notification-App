const express = require("express");
require ("./db/mongoose");
const templateRouter = require("./routers/template");

const app = express();

app.use(express.json());
app.use(templateRouter);

module.exports = app;