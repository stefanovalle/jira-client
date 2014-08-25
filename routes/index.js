var express = require('express');
var router = express.Router();
var passport = require('passport');
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
    .post(passport.authenticate('user-local', {
        successRedirect: '/dashboard',
        failureRedirect: '/',
        failureFlash: 'Invalid username or password.'
    }));

/**
 * Dashboard
 */
router.get('/dashboard', isLoggedIn, function (req, res, next) {

    new User({'id': req.session.passport.user})
        .fetch()
        .then(function(user) {
            res.render('dashboard/index', {
                user: user
            });
        });
});

/**
 * Login
 */
router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});


/**
 * Check if isLogged
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}

module.exports = router;
