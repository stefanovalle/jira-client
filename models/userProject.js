var bookshelf = require('../config/db-config.js');

var userProject = bookshelf.Model.extend({
    tableName: 'user-projects',
    project: function() {
        var Project = require('./project');
        return this.belongsTo(Project, "project_id");
    },
    user: function() {
        var User = require('./user');
        return this.belongsTo(User, "user_id");
    }
});

module.exports = userProject;
