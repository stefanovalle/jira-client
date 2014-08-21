var express = require('express');
var router = express.Router();
var userProject = require('../collections/userProject');

/**
 * Index
 */
router.route('/')
    .get(function (req, res, next) {

        new userProject({'user_id': '1'})
            .fetch({
                withRelated: ['project', 'user']
            })
            .then(function(userProject) {

                console.log(userProject.toJSON());

                /*
                var project = userProject.related('project');
                var user = userProject.related('user');

                console.log(userProject.get('project_id'));
                console.log(project.get('name'));
                console.log(project.get('description'));
                console.log(user.get('fullname'));*/

            });

        res.render('project/index', {
            title: 'Jira Client'
        });
    });


module.exports = router;
