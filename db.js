var mongoose = require('mongoose');

mongoose.connection.on("open", function (ref) {
    console.log("Connected to mongo server.");
});

mongoose.connection.on("error", function (err) {
    console.log(err);
});

mongoose.connect('mongodb://localhost/library?authSource=dbWithUserCredentials', {
    "auth":
    { "authSource": "admin" },
    "user": "test",
    "pass": "test",
    useMongoClient: true
});

module.exports = mongoose;

