var express = require('express');
var router = express.Router();
var userFilter = require('../collections/userFilter');
var filter = require('../models/filter');
var Jira = require('../jira');

/**
 * Index
 */
router.route('/')
    .get(function (req, res, next) {

        new userFilter({'user_id': '1'})
            .fetch({
                withRelated: ['filter', 'user']
            })
            .then(function(userFilter) {

                res.render('filter/index', {
                    filters: userFilter
                });
            });
    });

/**
 * View
 */
router.route('/view/:id')
    .get(function (req, res, next) {

        new filter({'id_filter_on_jira' :  req.param('id')})
            .fetch()
            .then(function(filter) {

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
                }, function(error, issues) {

                    if (error) throw error;

                    res.render('filter/view', {
                        issues: issues,
                        filter: filter
                    });
                });

            });
    });


module.exports = router;
