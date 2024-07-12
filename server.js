const express = require("express");

const app = express();

const dbConfig = require('./db');

const roomsRoute = require("./routes/roomRoute")
const userroute = require("./routes/userroute")

app.use('/api/rooms', roomsRoute)
app.use('/api/users' , userroute)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`node server started`));