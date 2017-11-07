var db = require('../db');

var User = db.model('User', {
    username: { type: String, required: true , index: {unique: true}},
    password: { type: String, required: true }
})

