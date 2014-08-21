var express = require('express');
var router = express.Router();

/**
 * Index
 */
router.route('/')
    .get(function (req, res, next) {
        res.render('dashboard/index', {
            title: 'Jira Client'
        });
    });


module.exports = router;
