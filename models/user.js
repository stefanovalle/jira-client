var bookshelf = require('../config/db-config.js');

var User = bookshelf.Model.extend({
    tableName: 'users',
    filters: function() {
        var userProjects = require("./userFilters");
        return this.hasMany(userProjects, "user_id");
    }
});

module.exports = User;