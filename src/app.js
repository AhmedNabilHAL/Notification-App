const express = require("express");
require ("./db/mongoose");
const {router} = require("./routers/template");

const app = express();

app.use(express.json());
app.use(router);

module.exports = app;