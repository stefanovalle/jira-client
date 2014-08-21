var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Jira = require('../jira');

/* GET home page
router.get('/', function(req, res) {

    new User({fullname: 'New Article 11'}).save().then(function(model) {
        console.log(model);
    });

    res.render('index/index', { title: 'Express' });
});*/

/**
 * Login
 */
router.route('/')
    .get(function (req, res, next) {

        /*
        var jql = 'project = CLXSMS';
        Jira.searchJira(jql, {
            maxResults: 200,
            fields: [
                'summary',
                'description',
                'created',
                'aggregateprogress',
                'priority',
                'status',
                'assignee',
                'creator'
            ]
        }, function(error, issues) {
            console.log(issues);
        });*/

        res.render('index/index', {
            title: 'Jira Client',
            message: req.flash('error')
        });
    })


module.exports = router;
