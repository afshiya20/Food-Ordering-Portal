const express = require('express');
const app = express();
const bodyParser = require('body-parser');//to return javascript obj
const cors = require('cors');//used for security
const mongoose = require('mongoose');
const PORT = 4000;
const DB_NAME = "tutorial"

// routes
var testAPIRouter = require("./routes/testAPI");
var UserRouter = require("./routes/Users");

app.use(cors());//used to mount the specified middleware functions at the path which is being specified.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connection to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/' + DB_NAME, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully !");
})

// setup API endpoints
app.use("/testAPI", testAPIRouter);
app.use("/user", UserRouter);

// used to bind and listen the connections on the specified host and port.
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

