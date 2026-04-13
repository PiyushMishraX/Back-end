const express = require('express')
const authRoutes = require("./routes/auth.routes")

const app = express();
app.use(express.json())

app.use("/api/auth", authRoutes) // have to use prefix -> /api/auth to ask api created with router

module.exports = app;
