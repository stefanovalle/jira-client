var express = require('express');
var router = express.Router();
var User = require('../models/user');

/**
 * Index
 */
router.route('/')
    .get(function (req, res, next) {

        new User({'id': req.session.passport.user})
            .fetch()
            .then(function(user) {
                res.render('dashboard/index', {
                    user: user
                });
            });
    });

module.exports = router;
