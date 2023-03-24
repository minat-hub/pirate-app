const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/crmdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connection to the database successful"))
    .catch(err => console.log("Something went wrong unable to connect to database", err));
