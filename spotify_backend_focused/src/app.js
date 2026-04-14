const express = require('express')
const cookieParser = require('cookie-parser')



const app = express();
app.use(express.json()) // rquest mai data aa sake
app.use(cookieParser()) // cookie ka data padh sake


module.exports = app;