const express = require("express");
require ("./db/mongoose");
const notificationRouter = require("./routers/notification");

const app = express();

app.use(express.json());
app.use(notificationRouter);

module.exports = app;