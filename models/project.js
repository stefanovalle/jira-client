var bookshelf = require('../config/db-config.js');

var Project = bookshelf.Model.extend({
    tableName: 'projects',
    projects: function() {
        var userProjects = require("./userProjects");
        return this.hasMany(userProjects, "project_id");
    }
});

module.exports = Project;
