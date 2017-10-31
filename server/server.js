var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.use(bodyParser.json());

app.use('/api/posts', require('./controllers/api/posts'));

app.get('/', (req, res) => {
    /* do not use only ../client... the "../" is considered malicious. The local
    path must be resolved, then call sendfile */
    res.sendFile(path.resolve('client/layouts/posts.html'));
})

app.listen(3000, () => {
    console.log('Server listening on', 3000);
})