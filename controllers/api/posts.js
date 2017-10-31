var Post = require('../../models/post');
var router = require('express').Router();

// request data
router.get('/', (req, res) => {
    Post.find((err, posts) => {
        if (err)
            return next(err);
        res.json(posts);
    })
})

// send data
router.post('/', (req, res, next) => {

    // create the Post model with data sent by the user
    var post = new Post({
        username: req.body.username,
        body: req.body.body
    });

    // save data sent by the user
    post.save(function (err, post) {
        if (err) { return next(err); }
        res.status(201).json(post)
    });
})

module.exports = router;
