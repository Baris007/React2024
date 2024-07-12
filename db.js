const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://bdeniz20031:minik@proje.ucgj12c.mongodb.net/rooms'

mongoose.connect(mongoURL)


var connection = mongoose.connection

connection.on('error' , () => {

    console.log('mongo db connection failed')
})

connection.on('connected' , () => {

    console.log('mongo db connection succesful')
})


module.exports = mongoose
