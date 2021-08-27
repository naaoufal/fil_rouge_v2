const express = require("express");
const cors = require('cors');
require("dotenv").config();
const connectDB = require("./back_end/config/mongodb");
const app = express();
const http = require('http');
const passport = require('passport');
require("./back_end/config/passport")
const server = http.createServer(app)
// init socket :
const socket = require("socket.io");
const io = socket(server)

// connect to database with mongodb:
connectDB()

// config cors :
app.use(express.json())
app.use(cors())

// check if user auth exist or not :
const isLoggedIn = (req, res, next) => {
    req.user ? next() : res.sendStatus(401);
}

// passport config :
// app.use(session({ secret: 'google', resave: false, saveUninitialized: true }))
app.use(passport.initialize())

app.get('/auth/google',
  passport.authenticate('google', { scope: 
    [ 'openid', 'email', 'profile' ] }
));

app.get( '/auth/google/callback',
  passport.authenticate( 'google', {
    successRedirect: '/',
    // failureRedirect: '/auth/google/failure'
  })
);

// declaring url endpoints :
app.use("/api/admins", require("./back_end/routes/admins"))
app.use("/api/tags", require("./back_end/routes/tags"))
app.use("/api/staffs", require("./back_end/routes/staffs"))
app.use("/api/clients", require("./back_end/routes/clients"))
app.use("/api/posts", require("./back_end/routes/posts"))

// config for comments :


// start the server
server.listen(3001, () => {console.log("the server is started")});