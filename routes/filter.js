var express = require('express');
var router = express.Router();
var userFilter = require('../models/userFilter');
var filter = require('../models/filter');
var Jira = require('../jira');

/**
 * Index
 */
router.get('/', isLoggedIn, function (req, res, next) {

    userFilter.where({'user_id': req.session.passport.user})
        .fetchAll({withRelated: ['filter']})
        .then(function (userFilter) {
            res.render('filter/index', {
                filters: userFilter
            });
        });
});

/**
 * View
 */
router.get('/view/:id', isLoggedIn, function (req, res, next) {

    new filter({'id_filter_on_jira': req.param('id')})
        .fetch({require: true})
        .then(function (filter) {

            new userFilter({
                'user_id': req.session.passport.user,
                'filter_id': filter.get('id')
            })
                .fetch({require: true})
                .then(function (userFilter) {

                    var jql = 'filter = ' + filter.get('id_filter_on_jira');
                    Jira.searchJira(jql, {
                        maxResults: 20,
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
                    }, function (error, issues) {

                        if (error) throw error;

                        res.render('filter/view', {
                            issues: issues,
                            filter: filter
                        });
                    });

                }).catch(userFilter.NotFoundError,function () {
                    res.status(404).render('404');
                }).catch(function (err) {
                    res.status(500).render('error');
                });

        }).catch(filter.NotFoundError,function () {
            res.status(404).render('404');
        }).catch(function (err) {
            res.status(500).render('error');
        });
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
