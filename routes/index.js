var express = require('express');
var router = express.Router();
var passport = require('passport');

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
    .post(passport.authenticate('user-local', {
        successRedirect: '/dashboard',
        failureRedirect: '/',
        failureFlash: 'Invalid username or password.'
    }));

/**
 * Login
 */
router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});


module.exports = router;
