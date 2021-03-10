const express = require("express")
const socket = require("socket.io")
const cors = require('cors');
require("dotenv").config()
const connectDB = require("./back_end/config/mongodb")
const app = express()

// connect to database with mongodb:
connectDB()

app.use(express.json())
app.use(cors())


// declaring url endpoints :
app.use("/api/admins", require("./back_end/routes/admins"))


// start the server
app.listen(3001, () => console.log("the server is started"))