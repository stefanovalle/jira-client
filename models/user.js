var bookshelf = require('../config/db-config.js');

var User = bookshelf.Model.extend({
    tableName: 'users',
    projects: function() {
        var userProjects = require("./userProjects");
        return this.hasMany(userProjects, "user_id");
    }
});

module.exports = User;