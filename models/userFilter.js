var bookshelf = require('../config/db-config.js');

var userProject = bookshelf.Model.extend({
    tableName: 'user-filters',
    filter: function() {
        var Filter = require('./filter');
        return this.belongsTo(Filter, "filter_id");
    },
    user: function() {
        var User = require('./user');
        return this.belongsTo(User, "user_id");
    }
});

module.exports = userProject;
