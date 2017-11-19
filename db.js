var mongoose = require('mongoose');

mongoose.connection.on("open", function (ref) {
    console.log("Connected to mongo server.");
});

mongoose.connection.on("error", function (err) {
    console.log(err);
});

mongoose.connect('mongodb://localhost/library');

module.exports = mongoose;

