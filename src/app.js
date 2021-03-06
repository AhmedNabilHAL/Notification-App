const express = require("express");
require ("./db/mongoose");
const {populateQueues} = require("./classes/NotificationManager");
populateQueues();
const {router} = require("./routers/template");
const app = express();

app.use(express.json());
app.use(router);

module.exports = app;