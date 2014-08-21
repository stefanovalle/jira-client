var express = require('express');
var router = express.Router();
var User = require('../models/user');

/**
 * Login
 */
router.route('/')
    .get(function (req, res, next) {
        res.render('index/index', {
            title: 'Jira Client',
            message: req.flash('error')
        });
    })

/**
 * Login
 */
router.route('/logout')
    .get(function (req, res, next) {
        res.send();
    });


module.exports = router;
