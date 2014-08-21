var bookshelf = require('../config/db-config.js');

var Filter = bookshelf.Model.extend({
    tableName: 'filters',
    filters: function() {
        var userProjects = require("./userFilters");
        return this.hasMany(userProjects, "filter_id");
    }
});

module.exports = Filter;
