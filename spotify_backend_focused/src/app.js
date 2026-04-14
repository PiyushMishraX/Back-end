const express = require('express')
const cookieParser = require('cookie-parser')
const authRoutes = require('./routes/auth.routes')



const app = express();
app.use(express.json()) // rquest mai data aa sake
app.use(cookieParser()) // cookie ka data padh sake



// app.use('/api/auth' ,authRoutes)
app.use("/api/auth" ,authRoutes)


module.exports = app;